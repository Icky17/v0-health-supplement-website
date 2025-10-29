"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"
import { getSupplementRecommendations, type RecommendationData } from "@/lib/supplement-data"

interface Supplement {
  name: string
  dosage: string
  benefits: string[]
  reasoning: string
  precautions: string[]
  confidence: number
}

interface SupplementRecommendationsProps {
  symptoms: string
  onClose?: () => void
}

export function SupplementRecommendations({ symptoms, onClose }: SupplementRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<RecommendationData | null>(null)

  useEffect(() => {
    if (symptoms) {
      const data = getSupplementRecommendations(symptoms)
      setRecommendations(data)
    }
  }, [symptoms])

  if (!recommendations) {
    return null
  }

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return "bg-green-100 text-green-800"
    if (confidence >= 60) return "bg-yellow-100 text-yellow-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Supplement Recommendations
              </CardTitle>
              <CardDescription>Based on: "{symptoms}"</CardDescription>
            </div>
            {onClose && (
              <Button variant="outline" onClick={onClose}>
                New Search
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{recommendations.summary}</p>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.recommendations.map((supplement, index) => (
          <Card key={index} className="h-fit">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{supplement.name}</CardTitle>
                <Badge className={getConfidenceColor(supplement.confidence)}>{supplement.confidence}% confidence</Badge>
              </div>
              <CardDescription className="font-medium text-primary">{supplement.dosage}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Benefits
                </h4>
                <ul className="text-sm space-y-1">
                  {supplement.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="h-4 w-4 text-blue-600" />
                  Why This Helps
                </h4>
                <p className="text-sm text-muted-foreground">{supplement.reasoning}</p>
              </div>

              {supplement.precautions.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    Precautions
                  </h4>
                  <ul className="text-sm space-y-1">
                    {supplement.precautions.map((precaution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-yellow-600 rounded-full mt-2 flex-shrink-0" />
                        {precaution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Disclaimer */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          <strong>Medical Disclaimer:</strong> {recommendations.disclaimer}
        </AlertDescription>
      </Alert>
    </div>
  )
}
