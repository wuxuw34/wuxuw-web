"use client"
import { useCallback, useEffect, useState } from "react";


export default function useMobile(size: number = 756) {

  const [isMobile, setIsMobile] = useState(false) // 是否是手机端
  const handler = useCallback(() => {
    const width = window.innerWidth
    console.log('当前宽度')
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [handler])


  return isMobile

}