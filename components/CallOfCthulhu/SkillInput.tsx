import React, { useMemo } from "react";

export function InputWithDiv({ handleChange, value }: { handleChange: (event: any) => void; value: number }) {
  const halfValue = useMemo(() => Math.floor(value / 2), [value]);
  const oneFifth = useMemo(() => Math.floor(value / 5), [value]);

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} />
      <div>{halfValue}</div>
      <div>{oneFifth}</div>
    </div>
  );
}
