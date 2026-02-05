import { http, HttpHandler, HttpResponse } from 'msw';
import articleHandlers from './article';
import commentsHandlers from './comment';


export const handlers: HttpHandler[] = [
  http.get('/api/hello', () => {
    return HttpResponse.json({ message: 'hello world' })
  }),
  ...articleHandlers,
  ...commentsHandlers
]