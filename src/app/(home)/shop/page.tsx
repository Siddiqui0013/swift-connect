"use client"

import { useState, useMemo } from "react"
import { Heart, Search } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  image: string
  model: string
}

const products: Product[] = [
  {
    id: "1",
    name: "Apple iPhone 14 Pro 512GB Gold",
    price: 1437,
    image: "/placeholder.svg?height=300&width=300",
    model: "MQ233",
  },
  {
    id: "2",
    name: "Apple iPhone 11 128GB White",
    price: 510,
    image: "/placeholder.svg?height=300&width=300",
    model: "MQ233",
  },
  {
    id: "3",
    name: "Apple iPhone 13 256GB Black",
    price: 899,
    image: "/placeholder.svg?height=300&width=300",
    model: "MQ234",
  },
  {
    id: "4",
    name: "Apple iPhone 12 Pro 256GB Blue",
    price: 799,
    image: "/placeholder.svg?height=300&width=300",
    model: "MQ235",
  },
  {
    id: "5",
    name: "Apple iPhone 14 128GB Purple",
    price: 999,
    image: "/placeholder.svg?height=300&width=300",
    model: "MQ236",
  },
]

type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc"

export default function ShopGrid() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<SortOption>("name-asc")
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .sort((a, b) => {
        switch (sortBy) {
          case "price-asc":
            return a.price - b.price
          case "price-desc":
            return b.price - a.price
          case "name-asc":
            return a.name.localeCompare(b.name)
          case "name-desc":
            return b.name.localeCompare(a.name)
          default:
            return 0
        }
      })
  }, [searchQuery, sortBy])

  return (
    <div>
      {/* Header */}
      <div className="min-h-screen mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-lg font-semibold">
          Total Products: <span className="text-[#c41e3a]">{filteredAndSortedProducts.length}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative flex-grow md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c41e3a] focus:border-transparent bg-white"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 m-4 lg:grid-cols-4 gap-6">
        {filteredAndSortedProducts.map((product) => (
          <div key={product.id} className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
            {/* Product Image and Favorite Button */}
            <div className="relative">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={200}
                height={200}
              />
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    favorites.includes(product.id) ? "fill-[#c41e3a] text-[#c41e3a]" : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">({product.model})</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button className="bg-[#c41e3a] text-white px-6 py-2 rounded-md hover:bg-[#a01830] transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

