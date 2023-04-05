import { useState, useEffect } from 'react';

enum ScrollDirectionEnum  {
   Top = "top",
   Down = "down",
   Up = "up",
}

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState<ScrollDirectionEnum>(ScrollDirectionEnum.Top);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setScrollDir(ScrollDirectionEnum.Top);
      } else if (currentScrollY > window.lastScrollY) {
        setScrollDir(ScrollDirectionEnum.Down);
      } else if (currentScrollY < window.lastScrollY) {
        setScrollDir(ScrollDirectionEnum.Up);
      }

      window.lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDir;
};