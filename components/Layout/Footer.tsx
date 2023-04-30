import { useTranslation } from "hooks/useTranslation";
import React from "react";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="py-6">
      <hr className="border-t-1 border-gray-400" />

      <div className="flex items-center justify-center px-[5vw] pt-3">
        <span>{t.title}</span>
      </div>
    </footer>
  );
};
