import { http, HttpHandler, HttpResponse } from 'msw';
import articleHandlers from './article';


export const handlers: HttpHandler[] = [
  http.get('/api/hello', () => {
    return HttpResponse.json({ message: 'hello world' })
  }),
  ...articleHandlers,
]