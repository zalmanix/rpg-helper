import React, { useEffect, useMemo } from "react";
import { CharacterInformation } from "./CharacterInformation";
import { useTranslation } from "hooks/useTranslation";
import { useCOCCharacter } from "hooks/context/useCOCCharacter";

const Characteristic = ({ keyValue, value }: { keyValue: string; value: string }) => {
  return (
    <div className="flex w-full max-w-[250px] flex-row items-center gap-2">
      <span>{keyValue}</span>
      <span className="w-full overflow-hidden text-ellipsis border-b border-gray-300 pl-3 italic">{value}</span>
    </div>
  );
};

export function CharacterScheet() {
  const { t } = useTranslation("COC");
  const { name, job, age, sex, home, birthPlace, player } = useCOCCharacter();

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-row gap-2 p-2">
        <div className="flex w-1/4 flex-col gap-2">
          <CharacterInformation keyValue={t.name} value={name} />
          <CharacterInformation keyValue={t.player} value={player} />
          <CharacterInformation keyValue={t.job} value={job} />
          <CharacterInformation keyValue={t.age} value={`${age}`} />
          <CharacterInformation keyValue={t.sex} value={sex} />
          <CharacterInformation keyValue={t.home} value={home} />
          <CharacterInformation keyValue={t.birthPlace} value={birthPlace} />
        </div>

        <div className="flex w-3/4 flex-col">
          <h2>Characteristics</h2>
          <div className="h-full">
            <div className="h-1/3"></div>
            <div className="h-1/3"></div>
            <div className="h-1/3"></div>
          </div>
        </div>
      </div>
      <div>Skills</div>
      <div>additional informations</div>
    </div>
  );
}
