import { useEffect, useState } from "react";

export default function useWheel(callback?: (x: number, y: number) => void) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      callback?.(e.deltaX, e.deltaY);
      setX(e.deltaX);
      setY(e.deltaY);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return {
    x,
    y,
  };
}
