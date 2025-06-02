import { Hono } from 'hono'
import { deepResearch } from './api/deep-research'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/deep-research', deepResearch)

export default app
