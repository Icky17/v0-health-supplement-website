import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

export async function POST(req: Request) {
  const { prompt } = await req.json()

  const { text } = await generateText({
    model: openai.responses("gpt-5"),
    prompt,
    maxOutputTokens: 1000,
    temperature: 0.7,
  })

  return Response.json({ text })
}
