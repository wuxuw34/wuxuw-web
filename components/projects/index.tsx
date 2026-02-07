"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import BlogProject from "./blog";
import FileShareProject from "./fileShare";
import useWheel from "@/hooks/useWheel";
import Layer from "./layer";
import { animeImgs } from "@/constans/image";
import ChatProject from "./chat";

const els = [BlogProject, FileShareProject, ChatProject];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentLayerRef = useRef(0);
  const [currentLayer, setCurrentLayer] = useState(0);
  const handleScroll = useCallback(
    (size: number) => {
      if (!scrollRef.current) return;
      // 获取当前视口高度
      const height = window.innerHeight;
      scrollRef.current?.scrollTo({
        top: size * height,
        behavior: "smooth",
      });
    },
    [scrollRef],
  );
  useWheel((_, y) => {
    if (y > 0) {
      // 向下滚动
      currentLayerRef.current++;
      if (currentLayerRef.current >= els.length) {
        currentLayerRef.current = els.length - 1;
      }
    } else {
      currentLayerRef.current--;
      if (currentLayerRef.current < 0) {
        currentLayerRef.current = 0;
      }
    }
    handleScroll(currentLayerRef.current);
  });

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("wheel", handler, {
      passive: false,
    });
    return () => {
      window.removeEventListener("wheel", handler);
    };
  }, []);

  return (
    <div className=" fixed top-0 left-0 w-full h-full ">
      <div
        className=" overflow-y-auto  transform-3d w-full h-full"
        style={{
          perspective: `${els.length }px`,
        }}
        ref={scrollRef}
      >
        {els.map((E, i) => (
          <Layer
            img={animeImgs[i]}
            z={els.length - i - 1}
            perspective={els.length }
            key={i}
          >
            <E />
          </Layer>
        ))}
      </div>
    </div>
  );
}
