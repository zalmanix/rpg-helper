import React, { useMemo } from "react";
import { Checkbox } from "antd";

export const COCSkill = (checked = false, value = 0, minValue = 0, name: string) => {
  const padNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };
  return (
    <div className="flex flex-row gap-2">
      <Checkbox onChange={() => {}} checked={checked}>{`${name} (${padNumber(minValue)}%)`}</Checkbox>
    </div>
  );
};
