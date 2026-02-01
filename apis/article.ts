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

const article = {
  all: getAllArticles,
  getById: getArticleById
}

export default article