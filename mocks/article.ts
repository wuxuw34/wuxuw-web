import { http, HttpHandler, HttpResponse } from 'msw';


const articleHandlers: HttpHandler[] = [
  http.get('/api/article/get', ({ params }) => {

    const { id } = params

    return HttpResponse.json({
      code: 1,
      data: {
        count: 10,
        list: [
          {
            id: "1",
            title: '文章标题',
            content: `# 这是一号标题

            我现在正在测试一号标题的内容，我希望能够有一个编号，编号从1开始，每个编号占一行，编号后面跟着内容，内容和编号之间用空格隔开。
            我现在正在测试二号标题的内容，我希望能够有一个编号，编号从2开始，每个编号占一行，编号后面跟着内容，内容和编号之间用空格隔开。
            我现在正在测试三号标题的内容，我希望能够有一个编号，编号从3开始，每个编号占一行，编号后面跟着内容，内容和编号之间用空格隔开。

## 这是二号标题

这个是二号标题，这个内容和一号标题不一样

### 这是三号标题

#### 这是四号标题

##### 这是五号标题

###### 这是六号标题

\`\`\`javascript
const a = 1
let b = 2
var c = 3

const fn = ()=>{
    console.log("hello world")
}

function fn2(){
    console.log("this is b")
}
\`\`\`

这是一个结尾`,
            createAt: '2023-01-01',
            description: '文章描述，这是一个文章描述,这个描述很长，超过了一行的长度，需要被截断，只显示一行，后面的内容省略号表示，例如：文章描述，这是一个文章描述,这个描述很长，超过了一行的长度，需要被截断，只显示一行，后面的内容省略号表示，',

            tags: ['标签1', '标签2'],
            category: '分类1',
          },
          {
            id: "2",
            title: '文章标题2',
            content: '文章内容2',
            createAt: '2023-01-02',
            description: '文章描述2',
            tags: ['标签3', '标签4'],
            category: '分类2',
          },
        ] as Article[]
      }
    })
  }),
]

export default articleHandlers