import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  scrollEnd: () => void;
}

export default function useAutoScroll(props?: Props) {
  const { scrollEnd = () => {} } = props || {};
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(false); // 是否正在滚动
  const timerRef = useRef<number | NodeJS.Timeout>(0); // 滚动定时器
  const getCurrentHash = useCallback(() => {
    return decodeURIComponent(window.location.hash.replace(/^#/, ""));
  }, []);
  const scrollToId = useCallback(
    (v?: string) => {
      const hash = v ? v : getCurrentHash();
      if (hash) {
        // 获取到当前元素
        const element = document.getElementById(hash);
        if (element) {
          // 滚动到当前元素
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    },
    [getCurrentHash],
  );

  useEffect(() => {
    const handler = () => {
      if (!isAutoScrolling) {
        setIsAutoScrolling(true);
      }
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsAutoScrolling(false);
        scrollEnd();
        // 移除事件
        window.removeEventListener("scroll", handler);
      }, 500);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return {
    scrollToId,
    getCurrentHash,
    isAutoScrolling,
  };
}
