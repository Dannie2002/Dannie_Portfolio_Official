import React, { useState, useRef, useEffect } from "react";
import { Plus, X, SlidersHorizontal } from "lucide-react";

const defaultCategories = [
  "Poster designs",
  "Music artworks",
  "Book covers",
  "Logos",
  "Wedding cards",
  "T-shirt design",
  "Business cards",
  "Brochure, Leaflets & Booklet",
  "Roll banners",
];



const PortfolioFilter = ({

  

  categories = defaultCategories,
  productCount = 92,
  selectedCategories,
  onCategoryChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalCategories, setInternalCategories] = useState([]);

  // An empty array means all works are displayed.
  const activeCategories = selectedCategories ?? internalCategories;

  const toggleCategory = (category) => {
    const nextCategories = activeCategories.includes(category)
      ? activeCategories.filter((item) => item !== category)
      : [...activeCategories, category];

    setInternalCategories(nextCategories);
    onCategoryChange?.(nextCategories);
  };

  const filterContent = (
    <>
      {/* Filter Heading */}
      <div className="flex items-center gap-2 text-[#fffced] font-medium px-2 py-1 mb-2 rounded bg-[#5a4c87]">
        <Plus size={20} color="#ededed" />
        <h4 className="dmsans text-[13px]">Category</h4>
      </div>

      {/* Category Options */}
      <div className="flex flex-col gap-2">
        {categories.map((category) => {
          const isSelected = activeCategories.includes(category);

          return (
            <button
              key={category}
              type="button"
              aria-pressed={isSelected}
              onClick={() => toggleCategory(category)}
              className={`flex items-center gap-3 font-medium px-1 py-1 rounded text-left transition-colors duration-200 ${
                isSelected
                  ? "bg-(--text-color)/60 text-[#fffced]"
                  : "text-(--text-color) hover:bg-[#fffced]/5"
              }`}
            >
              {/* Multi-select Indicator */}
              <span
                className={`flex size-5 shrink-0 items-center justify-center rounded-full border border-[#fffced]/40 transition-colors duration-200 ${
                  isSelected ? "bg-(--primary-color)" : ""
                }`}
              >
                {isSelected && (
                  <span className="size-2 rounded-full bg-[#ededed]" />
                )}
              </span>

              <span
                className={`geonova text-[13px] ${
                  isSelected ? "text-[#cecdcd]" : "text-[#7a7e80]"
                }`}
              >
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-(--text-color) pt-3">
        <h2 className="text-[10px] uppercase chivo tracking-wider text-zinc-500 mb-2">
          {productCount} products
        </h2>

        <div className="flex flex-wrap gap-1">
          {["See services", "Pricing", "Comments"].map((item) => (
            <span
              key={item}
              className="px-1.5 py-1 dmsans rounded text-[#ededed] text-[12px] text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );


  return (
    <>
      {/* Desktop Filter */}
      <aside    className="hidden lg:flex h-full min-h-[480px] flex-col gap-2 rounded-[22px] border border-(--text-colour)/45 p-4">
        {filterContent}
      </aside>

      {/* Mobile Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-portfolio-filter"
        className="flex lg:hidden items-center justify-center gap-2 rounded-full border border-[#fffced]/25 px-4 py-3 text-[#ededed] transition-colors duration-300 hover:bg-[#fffced]/10"
      >
        <SlidersHorizontal size={16} />

        <span className="text_para text-[14px]">
          Add filter
        </span>

        {activeCategories.length > 0 && (
          <span className="text-[12px] text-[#909090]">
            · {activeCategories.length} selected
          </span>
        )}
      </button>

      {/* Mobile Filter Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            id="mobile-portfolio-filter"
            role="dialog"
            aria-modal="true"
            aria-label="Filter portfolio projects"
            className="flex max-h-[85dvh] w-full max-w-sm flex-col gap-3 overflow-y-auto rounded-[22px] border border-(--text-colour)/45 bg-(--primary-color) p-4 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-1 flex items-center justify-between">
              <h3 className="dmsans text-[15px] text-[#ededed]">
                Filter portfolio
              </h3>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close filters"
                className="flex size-8 items-center justify-center rounded-full border border-[#fffced]/20 text-[#ededed] transition-colors hover:bg-[#fffced]/10"
              >
                <X size={17} />
              </button>
            </div>

            {filterContent}

            {/* Clear Selection */}
            <button
              type="button"
              onClick={() => {
                setInternalCategories([]);
                onCategoryChange?.([]);
              }}
              disabled={activeCategories.length === 0}
              className="mt-2 w-full rounded-full border border-[#fffced]/25 px-4 py-3 text-[13px] text-[#ededed] transition-colors hover:bg-[#fffced]/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Clear filters
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full rounded-full bg-[#fffced] px-4 py-3 text-[13px] font-medium text-[#0b0b0d] transition-transform duration-300 hover:scale-[1.02]"
            >
              View projects
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioFilter;
