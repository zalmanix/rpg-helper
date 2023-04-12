import React, { useMemo } from "react";

export function COCValues({ value }: { value: number }) {
  const half = useMemo(() => Math.floor(value / 2), [value]);
  const oneFifth = useMemo(() => Math.floor(value / 5), [value]);

  return (
    <div className="flex">
      <div>{value}</div>
      <div className="flex flex-col">
        <div>{half}</div>
        <div>{oneFifth}</div>
      </div>
    </div>
  );
}
