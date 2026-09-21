import React from "react";

const ThreeStars = ({
  color = "#000000",
  size = 24,
  className = "",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className={className}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M14.5 7l.9 3.6 3.6.9-3.6.9-.9 3.6-.9-3.6-3.6-.9 3.6-.9zm-1.725 2.775L5.877 11.5l6.898 1.725 1.725 6.898 1.725-6.898 6.898-1.725-6.898-1.725L14.5 2.877zM6 4l-.5-4L5 4l-4 .5L5 5l.5 4L6 5l4-.5zm1 14l-.5-4-.5 4-4 .5 4 .5.5 4 .5-4 4-.5z"
          fill={color}
        />

        <path
          fill="none"
          d="M0 0h24v24H0z"
        />
      </g>
    </svg>
  );
};

export default ThreeStars;