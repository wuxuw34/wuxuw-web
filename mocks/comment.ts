import { http, HttpHandler, HttpResponse } from 'msw';


const commentsHandlers: HttpHandler[] = [
  http.get('/api/comment/get', ({ params }) => {
    return HttpResponse.json({
      code: 1,
      data: {
        list: [
          {
            id: "1",
            content: "这是第一条评论，这是一个很长的评论内容，用来测试评论功能是否正常工作。",
            username: "用户一",
            timestamp: Date.now() - 1000 * 60 * 60,
          },
          {
            id: "2",
            content: "这是第二条评论，回复第一条评论。",
            username: "用户二",
            timestamp: Date.now() - 1000 * 60 * 30,
            // parentId: "1",
          },
          {
            id: "3",
            content: "这是第三条评论，独立评论。",
            username: "用户三",
            timestamp: Date.now() - 1000 * 60 * 10,
            // parentId: "1",
          },
          {
            id: "4",
            content: "这是第四条评论，回复第二条评论。",
            username: "用户四",
            timestamp: Date.now() - 1000 * 60 * 5,
          }
        ] as CommentMessage[]
      }
    })
  })
]

export default commentsHandlers