import config from "@/configs"
import axiosInstance from "./http"

const fetchGithubContributions = async (year?: number): Promise<GithubContributionData> => {
  // 默认获取到最新一年的数据
  if (!year) {
    year = new Date().getFullYear()
  }
  // 需要缓存数据
  const cacheKey = `github-contributions-${year}`
  const cachedData = JSON.parse(localStorage.getItem(cacheKey) || '{}') as LocalStorageItem<GithubContributionData> | null
  // 如果没有过期就读取缓存
  if (cachedData && Date.now() - cachedData.createAt < config.settings.expirationTime) {
    return cachedData.value
  } else {
    // 获取数据
    const response = await axiosInstance.get(
      `https://github-contributions-api.jogruber.de/v4/${config.profile.githubUsername}?y=${year}`
    )
    const data = response.data as GithubContributionData
    // 缓存数据
    localStorage.setItem(
      cacheKey,
      JSON.stringify({
        value: data,
        createAt: Date.now()
      })
    )
    return data
  }
  return {} as GithubContributionData
}

const github = {
  fetchContributions: fetchGithubContributions
}

export default github
