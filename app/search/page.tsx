"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, Sparkles, History, TrendingUp } from "lucide-react"
import { SupplementRecommendations } from "@/components/supplement-recommendations"

const popularSearches = [
  "Sleep problems and anxiety",
  "Joint pain and inflammation",
  "Low energy and fatigue",
  "Digestive issues and bloating",
  "Stress and mood support",
  "Immune system boost",
  "Brain fog and concentration",
  "Muscle recovery after exercise",
]

const recentSearches = ["Headache relief", "Better sleep quality", "Stress management"]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentSearch, setCurrentSearch] = useState("")
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSearch = (query: string) => {
    if (!query.trim()) return

    setCurrentSearch(query)
    setShowRecommendations(true)
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
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">AI Supplement Search</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Describe your symptoms, health goals, or concerns to get personalized supplement recommendations.
        </p>
      </div>

      {/* Main Search */}
      <div className="max-w-3xl mx-auto mb-12">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Describe Your Health Concerns
            </CardTitle>
            <CardDescription>Be as specific as possible for the best recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <textarea
                placeholder="Example: I've been having trouble sleeping for the past few weeks. I also feel stressed at work and have been getting frequent headaches. I'm looking for natural supplements that might help with these issues without making me drowsy during the day."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full min-h-[120px] p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button
                onClick={() => handleSearch(searchQuery)}
                disabled={!searchQuery.trim()}
                className="w-full"
                size="lg"
              >
                <Search className="h-4 w-4 mr-2" />
                Get AI Recommendations
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Search Options */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Popular Searches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Popular Searches
            </CardTitle>
            <CardDescription>Common health concerns people search for</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {popularSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-3"
                  onClick={() => handleSearch(search)}
                >
                  <Search className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{search}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Searches */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              Recent Searches
            </CardTitle>
            <CardDescription>Your recent search history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentSearches.map((search, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left h-auto p-3"
                  onClick={() => handleSearch(search)}
                >
                  <History className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">{search}</span>
                </Button>
              ))}
              {recentSearches.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">No recent searches yet</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tips */}
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Tips for Better Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Be Specific</h4>
              <p className="text-muted-foreground">
                Include details about duration, severity, and any patterns you've noticed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mention Goals</h4>
              <p className="text-muted-foreground">Tell us what you hope to achieve or improve with supplements.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Include Context</h4>
              <p className="text-muted-foreground">
                Mention lifestyle factors, stress levels, diet, or exercise habits.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Note Preferences</h4>
              <p className="text-muted-foreground">
                Let us know if you prefer natural options or have any restrictions.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
