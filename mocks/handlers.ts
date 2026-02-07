import { http, HttpHandler, HttpResponse } from 'msw';
import articleHandlers from './article';
import commentsHandlers from './comment';
import friendsHandlers from './friends';


export const handlers: HttpHandler[] = [
  http.get('/api/hello', () => {
    return HttpResponse.json({ message: 'hello world' })
  }),
  ...articleHandlers,
  ...commentsHandlers,
  ...friendsHandlers
]