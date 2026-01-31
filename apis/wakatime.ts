import { Cache } from "@/utils/cache"
import axiosInstance from "./http"

const getLanguages = async (): Promise<{
  data: WakaTimeLanguage[]
}> => {
  const cacheKey = "wakatime_languages"
  const cache = new Cache<{
    data: WakaTimeLanguage[]
  }>(cacheKey)
  if (cache.get()) {
    return cache.get()!
  } else {
    const resp = await axiosInstance.get("https://wakatime.com/share/@3f0c9c58-0b88-45cc-b00a-a644b140c148/d4bb5a98-9759-4b16-b605-216c40038f65.json")
    const data = resp.data
    cache.set(data)
    return data
  }
}

const getCodingActivity = async (): Promise<WakaTimeCodingActivity> => {
  const cacheKey = "wakatime_coding_activity"
  const cache = new Cache<WakaTimeCodingActivity>(cacheKey)
  if (cache.get()) {
    return cache.get()!
  } else {
    const resp = await axiosInstance.get("https://wakatime.com/share/@3f0c9c58-0b88-45cc-b00a-a644b140c148/21d81b5d-89f6-4cfd-aed6-6501ea365fca.json")
    const data = resp.data
    cache.set(data)
    return data
  }
}

const wakatime = {
  getLanguages,
  getCodingActivity
}

export default wakatime