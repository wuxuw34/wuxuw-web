
export function getDeviceInfo(): DeviceInfo {

  const { platform } = navigator
  const obj: DeviceInfo = {
    os: 'windows',
    browser: navigator.userAgent
  }

  if (platform.startsWith('Win')) {
    obj.os = 'windows'
  } else if (platform.startsWith('Mac')) {
    obj.os = 'macos'
  } else if (platform.startsWith('Linux')) {
    obj.os = 'linux'
  } else if (/Android/.test(navigator.userAgent)) {
    obj.os = 'android'
  } else if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    obj.os = 'ios'
  } else {
    obj.os = 'other'
  }
  let browser = "Unknown";
  let version = "Unknown";
  const ua = navigator.userAgent;
  // 获取浏览器
  if (ua.includes("Firefox")) {
    browser = "Firefox";
    version = ua.match(/Firefox\/([\d.]+)/)?.[1] || "Unknown";
  } else if (ua.includes("Edg")) {
    browser = "Edge";
    version = ua.match(/Edg\/([\d.]+)/)?.[1] || "Unknown";
  } else if (ua.includes("Chrome")) {
    browser = "Chrome";
    version = ua.match(/Chrome\/([\d.]+)/)?.[1] || "Unknown";
  } else if (ua.includes("Safari")) {
    browser = "Safari";
    version = ua.match(/Version\/([\d.]+)/)?.[1] || "Unknown";
  }
  obj.browser = `${browser} ${version}`;
  return obj
}