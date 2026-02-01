import { useCallback, useEffect, useRef } from "react";

/**
 * 节流函数，定时执行回调函数
 * @param callback 
 * @param ms 
 */
export default function useThrottle(callback?: () => void, ms = 100) {

  const timeRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isThrottled = useRef(false) // 是否节流中

  const throttleFn = useCallback(() => {
    if (!isThrottled.current) {
      isThrottled.current = true
      callback?.()
      if (timeRef.current)
        clearTimeout(timeRef.current)
      timeRef.current = setTimeout(() => {
        isThrottled.current = false
        callback?.()
      }, ms)
    }
  }, [callback, ms])

  return throttleFn
}