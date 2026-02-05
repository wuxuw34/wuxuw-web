
/**
 * 获取到根元素的font-size的值
 * @returns 
 */
function getRemInPx() {
  const html = document.documentElement; // 获取 <html> 元素
  const fontSize = window.getComputedStyle(html).fontSize; // 获取 computed font-size
  return parseFloat(fontSize); // 转为数字（单位是 px）
}