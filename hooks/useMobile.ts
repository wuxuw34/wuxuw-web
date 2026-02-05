"use client"
import { useCallback, useEffect, useState } from "react";

interface UseMobileProps {
  size?: number,
  callback?: (width: number) => void
}

export default function useMobile(props: UseMobileProps) {

  const { size = 765, callback } = props
  const [isMobile, setIsMobile] = useState(false) // 是否是手机端
  const handler = useCallback(() => {
    const width = window.innerWidth
    if (width > size) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
    callback?.(width)
  }, [callback, setIsMobile, size])

  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [handler])


  return isMobile

}