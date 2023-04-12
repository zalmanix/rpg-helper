import React from "react";
import { joinStrings } from "../../utils/joinString";

interface InputProps {
  min?: number;
  max?: number;
  additionalClass?: string;
  type?: "number" | "text" | "email" | "password";
}

export const Input: React.FC<InputProps> = ({ min = 0, max = 200, additionalClass = "", type = "number" }) => {
  return (
    <input
      type={type}
      className={joinStrings(
        [
          "appearance-none block w-24 px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
          additionalClass,
        ],
        " ",
      )}
      min={min}
      max={max}
    />
  );
};
