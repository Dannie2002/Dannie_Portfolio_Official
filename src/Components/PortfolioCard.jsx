import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import mockup from "../assets/Mock-up.jpg";
import audio from "../assets/Audioprod.jpg";
import tshirt from "../assets/Tshirt.jpg"
import app from "../assets/App.jpg"
import tshirt2 from "../assets/Tshirt2.jpg"
import bookCover from "../assets/BookCover.jpg"

// Portfolio content
const portfolioItems = [
  {
    id: 1,
    title: "Konnes Tech Systems",
    category: "Web designer & developer",
    image: mockup,
    colSpan: 4,
  },
  {
    id: 2,
    title: "Channel media complex studio",
    category: "Music artworks",
    image: audio,
    colSpan: 4,
  },
  {
    id: 3,
    title: "Bonbwe book cover",
    category: "Book cover",
    image: bookCover,
    colSpan: 8,
  },

    {
    id: 4,
    title: "Be content T shirt design.",
    category: "T-shirt design", 
    image: tshirt,
    colSpan: 4,
  },

    {
    id: 5,
    title: "Car ownership manager app.",
    category: "App & Website development", 
    image: app,
    colSpan: 4,
  },
      {
    id: 6,
    title: "Created for glory T-shirt.",
    category: "T-shirt design", 
    image: tshirt2,
    colSpan: 4,
  },


];

const PortfolioCardItem = ({ item }) => {
  return (
    <div
      className={`w-full border btn lg:border-0 rounded-[8px] border-[#909090]/40 px-5 py-6 lg:p-0 ${
        item.colSpan === 8 ? "col-span-1 lg:col-span-8" : "col-span-1 lg:col-span-4"
      } card_space`}
    >
      <div className="relative rounded-[5px] hover:scale-102 transition-all duration-360 h-[260px] lg:h-[400px] w-full bg-(--primary-color)">
        <img
          src={item.image}
          alt={item.title}
          className="size-full rounded-[5px] object-cover"
        />

        <div className="absolute bottom-0 left-0 flex gap-2 p-3">
          <h4 className="text_para font-normal text-[14px]">
            2/3
          </h4>
        </div>

        <div className="absolute bottom-0 right-0 flex gap-2 p-3">
          <button
            type="button"
            aria-label="Previous project image"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#fffced]/20 bg-[#fffced] text-[var(--primary-color)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
          >
            <ArrowLeft color="#0b0b0d" size={20} />
          </button>

          <button
            type="button"
            aria-label="Next project image"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[#fffced]/20 bg-[#fffced] text-[var(--primary-color)] transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
          >
            <ArrowRight color="#0b0b0d" size={20} />
          </button>
        </div>
      </div>

      <div>
        <div className="mt-3 flex flex-col gap-2 lg:gap-0">
          <h4 className="dmsans card_heading  text-[26px] lg:leading-[32px] lg:text-[28px]">
            {item.title}
          </h4>

          <h4 className="text_para text-[16px] dmsans">
            {item.category}
          </h4>
        </div>
      </div>
    </div>
  );
};

const PortfolioCard = ({ selectedCategories = [] }) => {
  const filteredItems =
    selectedCategories.length === 0
      ? portfolioItems
      : portfolioItems.filter((item) =>
          selectedCategories.includes(item.category)
        );

  return (
    <div className="grid grid-cols-1 p-2 lg:p-0 gap-6 lg:grid-cols-8 lg:gap-8">
      {filteredItems.map((item) => (
        <PortfolioCardItem key={item.id} item={item} />
      ))}
    </div>
  );
};


export default PortfolioCard;