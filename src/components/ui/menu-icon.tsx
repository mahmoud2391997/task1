import React from "react";

interface MenuIconProps {
  onClick?: (e: React.MouseEvent) => void;
}

export const MenuIcon = ({ onClick }: MenuIconProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="w-[35px] h-[35px] flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
    >
      <svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_0_38)">
          <rect width="23" height="23" rx="6" fill="white" />
          <rect
            opacity="0.6"
            x="0.5"
            y="0.5"
            width="22"
            height="22"
            rx="5.5"
            stroke="#CDCDCD"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_38">
            <rect width="23" height="23" rx="6" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
