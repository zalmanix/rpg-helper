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
      className={
        joinStrings(
          [
            "block w-24 appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
            additionalClass,
          ],
          " ",
        ) ?? ""
      }
      min={min}
      max={max}
    />
  );
};
