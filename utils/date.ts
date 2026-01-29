
/**
 * 获取某一年的第一天
 * @param year 
 * @returns 
 */
export function getFirstDayOfYear(year?: number): Date {
  year = year || new Date().getFullYear();
  return new Date(year, 0, 1);
}
