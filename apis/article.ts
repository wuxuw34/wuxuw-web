import { Cache } from "@/utils/cache"
import axiosInstance from "./http"

const getAllArticles = async () => {
  const resp = await axiosInstance.get('/api/article/get')
  const data = resp.data
  return data
}

const getArticleById = async (id: string) => {
  const resp = await axiosInstance.get('/api/article/get', {
    params: {
      id
    }
  })
  const data = resp.data
  return data
}

const getArticleCategories = async () => {
  const cacheKey = "article_categories"
  const cache = new Cache(cacheKey)
  if (cache.get()) {
    return cache.get()!
  } else {
    const resp = await axiosInstance.get('/api/article/categories')
    const data = resp.data
    cache.set(data)
    return data
  }
}

const article = {
  all: getAllArticles,
  getById: getArticleById,
  getArticleCategories
}

export default article