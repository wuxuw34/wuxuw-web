import axiosInstance from "./http"

const getAllArticles = async () => {
  const resp = await axiosInstance.get('/api/article/get')
  const data = resp.data
  return data
}

const article = {
  all: getAllArticles
}

export default article