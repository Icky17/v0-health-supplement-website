"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Eye, Star, Clock } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  views: number
  rating: number
  dateAdded: string
  featured: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Morning Wellness Routine",
    category: "Routines",
    description: "A comprehensive morning supplement routine for energy and focus",
    image: "/morning-supplements-vitamins-on-wooden-table.jpg",
    tags: ["Energy", "Focus", "Morning", "Vitamins"],
    views: 1250,
    rating: 4.8,
    dateAdded: "2024-01-15",
    featured: true,
  },
  {
    id: 2,
    title: "Natural Sleep Support Stack",
    category: "Sleep",
    description: "Evidence-based supplements for better sleep quality and relaxation",
    image: "/sleep-supplements-melatonin-magnesium-bedtime.jpg",
    tags: ["Sleep", "Relaxation", "Natural", "Evening"],
    views: 980,
    rating: 4.7,
    dateAdded: "2024-01-12",
    featured: true,
  },
  {
    id: 3,
    title: "Joint Health & Mobility",
    category: "Joint Health",
    description: "Supplements for maintaining healthy joints and reducing inflammation",
    image: "/joint-health-supplements-turmeric-glucosamine.jpg",
    tags: ["Joints", "Inflammation", "Mobility", "Anti-inflammatory"],
    views: 750,
    rating: 4.6,
    dateAdded: "2024-01-10",
    featured: false,
  },
  {
    id: 4,
    title: "Stress & Anxiety Relief",
    category: "Mental Health",
    description: "Natural adaptogens and supplements for stress management",
    image: "/stress-relief-supplements-ashwagandha-herbs.jpg",
    tags: ["Stress", "Anxiety", "Adaptogens", "Mental Health"],
    views: 1100,
    rating: 4.5,
    dateAdded: "2024-01-08",
    featured: true,
  },
  {
    id: 5,
    title: "Digestive Health Support",
    category: "Digestive",
    description: "Probiotics and digestive enzymes for gut health optimization",
    image: "/digestive-health-probiotics-gut-health-supplements.jpg",
    tags: ["Digestive", "Probiotics", "Gut Health", "Enzymes"],
    views: 650,
    rating: 4.4,
    dateAdded: "2024-01-05",
    featured: false,
  },
  {
    id: 6,
    title: "Immune System Boost",
    category: "Immunity",
    description: "Essential vitamins and minerals for immune system support",
    image: "/immune-support-supplements-vitamin-c-zinc-elderber.jpg",
    tags: ["Immunity", "Vitamins", "Antioxidants", "Prevention"],
    views: 890,
    rating: 4.6,
    dateAdded: "2024-01-03",
    featured: false,
  },
  {
    id: 7,
    title: "Brain Health & Cognitive Function",
    category: "Cognitive",
    description: "Nootropics and brain-supporting nutrients for mental clarity",
    image: "/brain-health-supplements-omega-3-nootropics-cognit.jpg",
    tags: ["Brain Health", "Cognitive", "Nootropics", "Memory"],
    views: 720,
    rating: 4.3,
    dateAdded: "2024-01-01",
    featured: false,
  },
  {
    id: 8,
    title: "Heart Health Essentials",
    category: "Cardiovascular",
    description: "Supplements for cardiovascular health and circulation support",
    image: "/heart-health-supplements-omega-3-coq10-cardiovascu.jpg",
    tags: ["Heart Health", "Cardiovascular", "Circulation", "Omega-3"],
    views: 580,
    rating: 4.5,
    dateAdded: "2023-12-28",
    featured: false,
  },
]

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))]
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "rating", label: "Highest Rated" },
  { value: "views", label: "Most Viewed" },
  { value: "title", label: "Alphabetical" },
]

export default function GalleryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const filteredItems = galleryItems
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
      const matchesFeatured = !showFeaturedOnly || item.featured

      return matchesSearch && matchesCategory && matchesFeatured
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        case "oldest":
          return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        case "rating":
          return b.rating - a.rating
        case "views":
          return b.views - a.views
        case "title":
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`
    }
    return views.toString()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Supplement Gallery</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore curated supplement combinations, routines, and visual guides for optimal health.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search gallery..."
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              variant={showFeaturedOnly ? "default" : "outline"}
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className="w-full"
            >
              <Star className="h-4 w-4 mr-2" />
              Featured Only
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-muted-foreground">
          Showing {filteredItems.length} of {galleryItems.length} items
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.featured && (
                <Badge className="absolute top-2 left-2 bg-primary">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </div>

            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{item.category}</Badge>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>

              <div className="flex flex-wrap gap-1">
                {item.tags.slice(0, 3).map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {item.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{item.tags.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {formatViews(item.views)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {item.rating}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {formatDate(item.dateAdded)}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-semibold mb-2">No items found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Stats */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Gallery Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{galleryItems.length}</div>
              <div className="text-sm text-muted-foreground">Total Items</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {galleryItems.filter((item) => item.featured).length}
              </div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">
                {formatViews(galleryItems.reduce((sum, item) => sum + item.views, 0))}
              </div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
