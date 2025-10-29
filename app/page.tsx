"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Heart, Brain, Zap, Shield } from "lucide-react"
import { SupplementRecommendations } from "@/components/supplement-recommendations"

const commonIssues = [
  { id: 1, title: "Headache", icon: Brain, description: "Tension, migraine, or cluster headaches" },
  { id: 2, title: "Fatigue", icon: Zap, description: "Low energy, tiredness, exhaustion" },
  { id: 3, title: "Stress", icon: Heart, description: "Anxiety, overwhelm, mental tension" },
  { id: 4, title: "Joint Pain", icon: Shield, description: "Arthritis, inflammation, stiffness" },
  { id: 5, title: "Sleep Issues", icon: Brain, description: "Insomnia, poor sleep quality" },
  { id: 6, title: "Digestive Issues", icon: Heart, description: "Bloating, indigestion, gut health" },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSearch, setCurrentSearch] = useState("")
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSearch = (query: string) => {
    if (!query.trim()) return

    setCurrentSearch(query)
    setShowRecommendations(true)
  }

  const handleIssueClick = (issue: string) => {
    setSearchQuery(issue)
    handleSearch(issue)
  }

  const handleNewSearch = () => {
    setShowRecommendations(false)
    setCurrentSearch("")
    setSearchQuery("")
  }

  if (showRecommendations && currentSearch) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SupplementRecommendations symptoms={currentSearch} onClose={handleNewSearch} />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
          Find the Right <span className="text-primary">Supplements</span> for Your Health
        </h1>
        <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
          Get personalized supplement recommendations based on your symptoms or health goals.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              Search for Supplements
            </CardTitle>
            <CardDescription>Describe your symptoms, discomforts, or health goals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., I have trouble sleeping and feel stressed..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
                className="flex-1"
              />
              <Button onClick={() => handleSearch(searchQuery)} disabled={!searchQuery.trim()} className="px-6">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Common Issues */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Or Choose a Common Health Concern</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {commonIssues.map((issue) => {
            const IconComponent = issue.icon
            return (
              <Card
                key={issue.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-primary/50"
                onClick={() => handleIssueClick(issue.title)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{issue.title}</h3>
                      <p className="text-sm text-muted-foreground">{issue.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Easy Search</h3>
            <p className="text-sm text-muted-foreground">
              Simply describe your symptoms and get instant supplement recommendations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Evidence-Based</h3>
            <p className="text-sm text-muted-foreground">
              All recommendations are backed by scientific research and clinical studies
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Comprehensive</h3>
            <p className="text-sm text-muted-foreground">
              Detailed information about dosages, benefits, and precautions for each supplement
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
