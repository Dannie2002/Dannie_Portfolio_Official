import React from "react";


const ProjectTooltipCard = ({ project, children }) => {
  return (
    <Tooltip
      containerClassName="text-[#fffced]"
      content={
        <div className="w-[280px] overflow-hidden rounded-xl">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#101011]/60 to-transparent" />
          </div>

          <div className="pt-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#fffced]">
              {project.title}
            </p>

            {project.description && (
              <p className="mt-1 text-xs leading-relaxed text-[#fffced]/60">
                {project.description}
              </p>
            )}
          </div>
        </div>
      }
    >
      {children}
    </Tooltip>
  );
};

export default ProjectTooltipCard;