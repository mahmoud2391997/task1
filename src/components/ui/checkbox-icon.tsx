import React from "react";

interface CheckboxIconProps {
  checked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export const CheckboxIcon = ({ checked = false, onClick }: CheckboxIconProps): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="w-[23px] h-[23px] rounded cursor-pointer transition-all hover:bg-gray-100"
      style={{
        backgroundColor: checked ? "#ffffff" : "#ffffff",
        border: checked ? "2px solid #CDCDCD" : "1px solid #CDCDCD",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {checked && (
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2222 0.777778L9.31111 4.68889L5.4 8.6L0.777778 4.33333"
            stroke="#333333"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};
