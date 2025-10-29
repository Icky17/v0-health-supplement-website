"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, AlertTriangle, CheckCircle } from "lucide-react"

interface Supplement {
  id: number
  name: string
  category: string
  description: string
  benefits: string[]
  dosage: string
  precautions: string[]
  evidenceLevel: "High" | "Moderate" | "Limited"
  commonUses: string[]
  rating: number
}

const supplements: Supplement[] = [
  {
    id: 1,
    name: "Vitamin D3",
    category: "Vitamins",
    description: "Essential vitamin for bone health, immune function, and mood regulation.",
    benefits: ["Bone health", "Immune support", "Mood regulation", "Muscle function"],
    dosage: "1000-4000 IU daily",
    precautions: ["May interact with certain medications", "Monitor blood levels"],
    evidenceLevel: "High",
    commonUses: ["Bone health", "Immune support", "Depression"],
    rating: 4.8,
  },
  {
    id: 2,
    name: "Omega-3 Fish Oil",
    category: "Fatty Acids",
    description: "Essential fatty acids that support heart, brain, and joint health.",
    benefits: ["Heart health", "Brain function", "Anti-inflammatory", "Joint support"],
    dosage: "1-3g daily with meals",
    precautions: ["May increase bleeding risk", "Choose quality sources"],
    evidenceLevel: "High",
    commonUses: ["Heart health", "Brain health", "Inflammation"],
    rating: 4.7,
  },
  {
    id: 3,
    name: "Magnesium Glycinate",
    category: "Minerals",
    description: "Highly bioavailable form of magnesium for muscle and nerve function.",
    benefits: ["Muscle relaxation", "Sleep quality", "Stress reduction", "Heart health"],
    dosage: "200-400mg before bed",
    precautions: ["May cause digestive upset in high doses", "Start with lower dose"],
    evidenceLevel: "High",
    commonUses: ["Sleep", "Muscle cramps", "Stress"],
    rating: 4.6,
  },
  {
    id: 4,
    name: "Probiotics",
    category: "Digestive Health",
    description: "Beneficial bacteria that support digestive and immune health.",
    benefits: ["Digestive health", "Immune support", "Mood regulation", "Nutrient absorption"],
    dosage: "10-50 billion CFU daily",
    precautions: ["Refrigerate if required", "Start slowly to avoid digestive upset"],
    evidenceLevel: "High",
    commonUses: ["Digestive issues", "Immune support", "Antibiotic recovery"],
    rating: 4.5,
  },
  {
    id: 5,
    name: "Ashwagandha",
    category: "Adaptogens",
    description: "Adaptogenic herb that helps the body manage stress and anxiety.",
    benefits: ["Stress reduction", "Anxiety relief", "Energy support", "Sleep quality"],
    dosage: "300-600mg daily",
    precautions: ["May interact with thyroid medications", "Avoid during pregnancy"],
    evidenceLevel: "Moderate",
    commonUses: ["Stress", "Anxiety", "Fatigue"],
    rating: 4.4,
  },
  {
    id: 6,
    name: "Turmeric (Curcumin)",
    category: "Anti-inflammatory",
    description: "Powerful anti-inflammatory compound from turmeric root.",
    benefits: ["Anti-inflammatory", "Joint health", "Antioxidant", "Brain health"],
    dosage: "500-1000mg with black pepper",
    precautions: ["May increase bleeding risk", "Take with fat for absorption"],
    evidenceLevel: "High",
    commonUses: ["Joint pain", "Inflammation", "Arthritis"],
    rating: 4.3,
  },
  {
    id: 7,
    name: "Melatonin",
    category: "Sleep Support",
    description: "Natural hormone that regulates sleep-wake cycles.",
    benefits: ["Sleep quality", "Jet lag relief", "Antioxidant properties"],
    dosage: "0.5-3mg 30 minutes before bed",
    precautions: ["May cause drowsiness", "Start with lowest effective dose"],
    evidenceLevel: "High",
    commonUses: ["Insomnia", "Jet lag", "Sleep disorders"],
    rating: 4.2,
  },
  {
    id: 8,
    name: "Coenzyme Q10",
    category: "Antioxidants",
    description: "Antioxidant that supports cellular energy production and heart health.",
    benefits: ["Heart health", "Energy production", "Antioxidant protection"],
    dosage: "100-200mg with meals",
    precautions: ["May interact with blood thinners", "Take with fat"],
    evidenceLevel: "Moderate",
    commonUses: ["Heart health", "Energy", "Statin side effects"],
    rating: 4.1,
  },
]

const categories = ["All", ...Array.from(new Set(supplements.map((s) => s.category)))]
const evidenceLevels = ["All", "High", "Moderate", "Limited"]

export default function DatabasePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedEvidence, setSelectedEvidence] = useState("All")
  const [sortBy, setSortBy] = useState("name")

  const filteredSupplements = useMemo(() => {
    const filtered = supplements.filter((supplement) => {
      const matchesSearch =
        supplement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplement.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        supplement.benefits.some((benefit) => benefit.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || supplement.category === selectedCategory
      const matchesEvidence = selectedEvidence === "All" || supplement.evidenceLevel === selectedEvidence

      return matchesSearch && matchesCategory && matchesEvidence
    })

    // Sort supplements
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "rating":
          return b.rating - a.rating
        case "evidence":
          const evidenceOrder = { High: 3, Moderate: 2, Limited: 1 }
          return evidenceOrder[b.evidenceLevel] - evidenceOrder[a.evidenceLevel]
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedEvidence, sortBy])

  const getEvidenceColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Limited":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getEvidenceIcon = (level: string) => {
    switch (level) {
      case "High":
        return <CheckCircle className="h-3 w-3" />
      case "Moderate":
        return <Star className="h-3 w-3" />
      case "Limited":
        return <AlertTriangle className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Supplement Database</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive information about supplements, their benefits, dosages, and scientific evidence.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search supplements..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedEvidence} onValueChange={setSelectedEvidence}>
              <SelectTrigger>
                <SelectValue placeholder="Evidence Level" />
              </SelectTrigger>
              <SelectContent>
                {evidenceLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="evidence">Evidence Level</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredSupplements.length} of {supplements.length} supplements
        </p>
      </div>

      {/* Supplements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSupplements.map((supplement) => (
          <Card key={supplement.id} className="h-fit hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{supplement.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{supplement.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs">{supplement.rating}</span>
                    </div>
                  </CardDescription>
                </div>
                <Badge className={getEvidenceColor(supplement.evidenceLevel)}>
                  <div className="flex items-center gap-1">
                    {getEvidenceIcon(supplement.evidenceLevel)}
                    {supplement.evidenceLevel}
                  </div>
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{supplement.description}</p>

              <div>
                <h4 className="font-semibold text-sm mb-2">Key Benefits</h4>
                <div className="flex flex-wrap gap-1">
                  {supplement.benefits.slice(0, 3).map((benefit, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {benefit}
                    </Badge>
                  ))}
                  {supplement.benefits.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{supplement.benefits.length - 3} more
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-1">Recommended Dosage</h4>
                <p className="text-sm text-primary font-medium">{supplement.dosage}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm mb-2">Common Uses</h4>
                <div className="flex flex-wrap gap-1">
                  {supplement.commonUses.map((use, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {use}
                    </Badge>
                  ))}
                </div>
              </div>

              {supplement.precautions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-sm mb-1 flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3 text-yellow-600" />
                    Precautions
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {supplement.precautions[0]}
                    {supplement.precautions.length > 1 && "..."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSupplements.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No supplements found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
