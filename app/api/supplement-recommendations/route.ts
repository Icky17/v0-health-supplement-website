import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const supplementRecommendationSchema = z.object({
  recommendations: z.array(
    z.object({
      name: z.string().describe("Name of the supplement"),
      dosage: z.string().describe("Recommended dosage"),
      benefits: z.array(z.string()).describe("Key benefits for the user"),
      reasoning: z.string().describe("Why this supplement is recommended"),
      precautions: z.array(z.string()).describe("Important precautions or side effects"),
      confidence: z.number().min(0).max(100).describe("Confidence level in this recommendation"),
    }),
  ),
  summary: z.string().describe("Overall summary of the recommendations"),
  disclaimer: z.string().describe("Medical disclaimer"),
})

export async function POST(req: Request) {
  try {
    const { symptoms } = await req.json()

    if (!symptoms || typeof symptoms !== "string") {
      return Response.json({ error: "Symptoms are required" }, { status: 400 })
    }

    const { object } = await generateObject({
      model: openai("gpt-4"),
      schema: supplementRecommendationSchema,
      prompt: `You are a knowledgeable supplement advisor. Based on the following symptoms or health concerns, provide evidence-based supplement recommendations: "${symptoms}"

      Guidelines:
      - Only recommend well-researched supplements with scientific backing
      - Include appropriate dosages based on research
      - Mention important precautions and potential interactions
      - Be conservative with recommendations
      - Always include a medical disclaimer
      - Rate your confidence in each recommendation (0-100)
      - Focus on natural, widely available supplements
      - Consider safety first

      Provide 3-5 relevant supplement recommendations.`,
      maxTokens: 2000,
    })

    return Response.json({ recommendations: object })
  } catch (error) {
    console.error("Error generating supplement recommendations:", error)
    return Response.json({ error: "Failed to generate recommendations" }, { status: 500 })
  }
}
