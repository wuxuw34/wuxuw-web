
const socials: Social[] = [
  {
    type: 'gmail',
    url: 'mailto:ljfwbd@gmail.com',
  },
  {
    type: 'github',
    url: 'https://github.com/wuxuw34',
  },
  {
    type: 'bilibili',
    url: 'https://space.bilibili.com/35105554',
    icon: '/bilibili.svg'
  }
]

const profile: Profile = {
  githubUsername: "wuxuw34",
  name: "wuxuw",
  avatar: "/avatar.jpg",
  title: "I am wuxuw",
  description: "A frontend developer",
  birthday: "2001-04-11",
  sex: "male",
  location: '湖北',
  workExperience: 1.5,
  tags: [
    "二次元",
    "游戏"
  ],
  skills: [
    "JavaScript",
    "Git",
    "TypeScript",
    "Electron",
    "React",
    "Vue",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "NodeJs",
    "npm",
    "pnpm"
  ],
  socials,
  experiences: [
    {
      company: "西南民族大学",
      startDate: "2020-10",
      endDate: "2024-06",
    },
    {
      company: "上海易宠科技有限公司",
      startDate: "2024-06",
      endDate: "2025-06",
      position: "前端开发工程师",
      description: "1. 负责公司前端项目的开发和维护\n2. 参与公司前端项目的需求分析和设计\n3. 与后端开发人员合作，解决前端项目中的技术问题",
    },
    {
      company: "上海易宠科技有限公司",
      startDate: "2025-06",
      endDate: "2025-10",
      position: "远程兼职",
      description: "1. 负责公司前端项目的开发和维护\n2. 参与公司前端项目的需求分析和设计\n3. 与后端开发人员合作，解决前端项目中的技术问题",
    }
  ]
}

export default profile;