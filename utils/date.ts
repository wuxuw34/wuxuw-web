
/**
 * 获取某一年的第一天
 * @param year 
 * @returns 
 */
export function getFirstDayOfYear(year?: number): Date {
  year = year || new Date().getFullYear();
  return new Date(year, 0, 1);
}

export function secondsToTime(seconds: number): string {
  const day = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (day > 0) {
    return `${day}天${hours}时`
  } else if (day === 0) {
    return `${hours}时${minutes}分`;
  }
  return `${day}天${hours}时${minutes}分${s}秒`;
}