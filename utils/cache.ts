import config from "@/configs"

interface CacheData<T> {
  expire: number,
  create: number,
  data: T
}

export class Cache<T> {
  private key: string
  private expire?: number

  constructor(key: string, expire: number = config.settings.expirationTime) {
    this.key = key
    this.expire = expire
  }

  get(): T | null {
    const cache = JSON.parse(localStorage.getItem(this.key) || "{}") as CacheData<T>
    if (cache && this.expire && Date.now() - this.expire < Number(cache.create)) {
      return cache.data
    }
    localStorage.removeItem(this.key)
    return null
  }

  set(value: T) {
    localStorage.setItem(this.key, JSON.stringify({
      expire: this.expire || 0,
      create: Date.now(),
      data: value
    } as CacheData<T>))
  }
}