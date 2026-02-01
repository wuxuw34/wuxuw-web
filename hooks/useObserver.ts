import { RefObject, useCallback, useEffect, useRef } from "react";

/**
 * 监听元素是否进入视口
 * @param ref 
 * @param callback 
 * @returns 
 */
export default function useObserver(callback: (entries: IntersectionObserverEntry[]) => void, options?: IntersectionObserverInit) {

  const observerRef = useRef<IntersectionObserver>(null);

  const observeElements = useCallback((els: HTMLElement[]) => {
    console.log(observerRef.current)
    els.forEach((el) => {
      observerRef.current?.observe(el);
    })
  }, [observerRef])
  const observeAllChildElements = useCallback((ref: RefObject<HTMLElement | null>) => {
    if (!ref.current) return
    const childElements = ref.current.children;
    observeElements(Array.from(childElements) as HTMLElement[]);
  }, [observeElements])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(callback, options ?? {
      threshold: 0.5,
    })
    // 当前元素的所有子元素

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return {
    observerRef,
    observeElements,
    observeAllChildElements
  }
}