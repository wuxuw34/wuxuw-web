import { useCallback, useEffect } from "react";

export default function useAutoScroll() {
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
    scrollToId();
  }, [scrollToId]);

  return {
    scrollToId,
    getCurrentHash,
  };
}
