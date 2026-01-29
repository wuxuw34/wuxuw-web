import { useEffect } from "react";

export default function useWheel(callback: (x: number, y: number) => void) {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      callback(e.deltaX, e.deltaY);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);
}
