import React, { useCallback, useMemo, useState } from "react";
import { useCOCCharacter } from "hooks/context/useCOCCharacter";

export const CharacterInformation = ({ keyValue, value }: { keyValue: string; value: string }) => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const { name } = useCOCCharacter();

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value, name);
    setInputValue(e.target.value);
    // setName(e.target.value);
  }, []);

  const input = useMemo(() => {
    return editing ? (
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => setEditing(false)}
        className="w-full overflow-hidden border-b border-gray-300 bg-background pl-3 italic"
      />
    ) : (
      <span
        className="w-full overflow-hidden text-ellipsis border-b border-gray-300 pl-3 italic"
        onClick={() => setEditing(true)}>
        {value}
      </span>
    );
  }, [editing, handleInputChange, inputValue, value]);

  return (
    <div className="flex w-full max-w-[250px] flex-row items-center gap-2">
      <span>{keyValue}</span>
      {input}
    </div>
  );
};
