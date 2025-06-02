import { Context } from 'hono'

export const deepResearch = async (c: Context) => {
  const { question } = await c.req.json()
  console.log(question)
  
  return c.json({
    status: 'success',
    question,
    response: `Processing research question: ${question}`,
    timestamp: new Date().toISOString()
  })
} 