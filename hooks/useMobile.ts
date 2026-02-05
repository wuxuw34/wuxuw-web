"use client"
import { useCallback, useEffect, useState } from "react";

interface UseMobileProps {
  size?: number,
  callback?: (width: number) => void,
  unit?: 'px' | 'rem'
}

export default function useMobile(props: UseMobileProps) {

  const { callback, unit = 'px' } = props
  let { size = 1024 } = props
  if (unit === 'rem') {
    size = size * getRemInPx()
  }
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