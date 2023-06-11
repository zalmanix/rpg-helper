import { COCCharacterContext } from "../../context/COCCharacterContext";
import { useContext } from "react";

export const useCOCCharacter = () => {
  const context = useContext(COCCharacterContext);

  if (!context) {
    throw new Error("COCCharacterContext must be within COCCharacterContextProvider");
  }

  return context;
};
