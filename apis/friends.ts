import { Cache } from "@/utils/cache"
import axiosInstance from "./http"

const getAllFriends = async () => {
  const cacheKey = "all_friends"
  const cache = new Cache(cacheKey)
  if (cache.get()) {
    return cache.get()!
  } else {
    const resp = await axiosInstance.get('/api/friends/get')
    const data = resp.data
    cache.set(data)
    return data
  }
}

const friends = {
  getAllFriends
}

export default friends