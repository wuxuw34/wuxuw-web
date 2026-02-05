import { Cache } from "@/utils/cache"
import axiosInstance from "./http"

const getAllComments = async () => {
  const cacheKey = "all_comments"
  const cache = new Cache(cacheKey)
  if (cache.get()) {
    return cache.get()!
  } else {
    const resp = await axiosInstance.get('/api/comment/get')
    const data = resp.data
    cache.set(data)
    return data
  }
}


const comment = {
  getAllComments
}

export default comment