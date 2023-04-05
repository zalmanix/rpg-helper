import React, { useMemo } from "react"
import Link from "next/link"

import { useScrollDirection } from "../../hooks/useScrollDirection"

export const Header = () => {
  const scrollDir = useScrollDirection();
  const headerStyles = useMemo(() => {
    return scrollDir === "down" ? "-top-[100px]" : "top-0";
  }, [scrollDir])


  return (
    <header className={`${headerStyles} right-0 left-0 py-6 px-[5vw] flex flex-row gap-3 fixed z-50 bg-black transition-all duration-150`}>
      <Link href="/">
        <span className="text-primary">Home</span>
      </Link>
      <Link href="/characters">
        <span>Characters</span>
      </Link>
      <Link href="/campaigns">
        <span>Campaigns</span>
      </Link>
    </header>
  );
};
