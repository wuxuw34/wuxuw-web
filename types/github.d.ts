
interface GithubContribution {
  date: string
  count: number
  level: number
}

interface GithubContributionData {
  total: Record<string, number>
  contributions: GithubContribution[]
}