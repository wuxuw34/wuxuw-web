
type DeviceOS = 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'other';

interface DeviceInfo {
  os: DeviceOS;
  browser: string;
}