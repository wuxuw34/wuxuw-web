import { avatarBgColor } from "@/constans/color";


export function getColorByString(str: string): string {

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hex = avatarBgColor[Math.abs(hash) % avatarBgColor.length]
  // hexToRgba(hex)
  return hex;
}

export function hexToRgba(hex: string, opacity: number = 100) {
  const hexArr = (hex.replace('#', '').match(/.{1,2}/g) || []).map(v => {
    // 需要转成10进制
    return Number("0x" + v).toString(10)
  })
  const rgba = `rgba(${hexArr[0]},${hexArr[1]},${hexArr[2]},${opacity})`
  return rgba
}