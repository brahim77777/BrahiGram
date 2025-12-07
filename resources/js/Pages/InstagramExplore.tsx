import React, { useState } from 'react';
import { Search, Grid, Film, Compass, Heart,MessageCircle,  } from 'lucide-react';

const exploreItems = [
  { id: 1, type: 'image', content: 'bg-gradient-to-br from-purple-300 to-pink-300' },
  { id: 2, type: 'video', content: 'bg-gradient-to-br from-blue-300 to-cyan-300' },
  { id: 3, type: 'image', content: 'bg-gradient-to-br from-green-300 to-emerald-300' },
  { id: 4, type: 'image', content: 'bg-gradient-to-br from-orange-300 to-red-300' },
  { id: 5, type: 'video', content: 'bg-gradient-to-br from-indigo-300 to-purple-300' },
  { id: 6, type: 'image', content: 'bg-gradient-to-br from-pink-300 to-rose-300' },
  { id: 7, type: 'image', content: 'bg-gradient-to-br from-teal-300 to-lime-300' },
  { id: 8, type: 'video', content: 'bg-gradient-to-br from-amber-300 to-orange-300' },
  { id: 9, type: 'image', content: 'bg-gradient-to-br from-violet-300 to-fuchsia-300' },
  { id: 10, type: 'image', content: 'bg-gradient-to-br from-cyan-300 to-blue-300' },
  { id: 11, type: 'video', content: 'bg-gradient-to-br from-rose-300 to-pink-300' },
  { id: 12, type: 'image', content: 'bg-gradient-to-br from-emerald-300 to-teal-300' },
  { id: 13, type: 'image', content: 'bg-gradient-to-br from-red-300 to-pink-300' },
  { id: 14, type: 'video', content: 'bg-gradient-to-br from-blue-300 to-indigo-300' },
  { id: 15, type: 'image', content: 'bg-gradient-to-br from-yellow-300 to-amber-300' },
  { id: 16, type: 'image', content: 'bg-gradient-to-br from-purple-300 to-violet-300' },
  { id: 17, type: 'video', content: 'bg-gradient-to-br from-orange-300 to-red-300' },
  { id: 18, type: 'image', content: 'bg-gradient-to-br from-green-300 to-emerald-300' },
];

export default function InstagramExplore() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Instagram</div>
            <div className="flex items-center space-x-6">
              {/* Navigation icons would go here */}
              <div className="w-6 h-6" />
              <div className="w-6 h-6" />
              <div className="w-6 h-6" />
              <div className="w-6 h-6" />
              <div className="w-6 h-6" />
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Category Tabs */}
        <div className="flex justify-center space-x-8 mb-6">
          <button className="flex items-center space-x-2 text-sm font-semibold border-b-2 border-black pb-2">
            <Grid className="w-4 h-4" />
            <span>Trending</span>
          </button>
          <button className="flex items-center space-x-2 text-sm text-gray-500 pb-2">
            <Compass className="w-4 h-4" />
            <span>Topics</span>
          </button>
        </div>

        {/* Explore Grid */}
        <div className="grid grid-cols-3 gap-2">
          {exploreItems.map((item) => (
            <div key={item.id} className="group relative aspect-square cursor-pointer overflow-hidden">
              <div className={`w-full h-full ${item.content} group-hover:scale-110 transition-transform duration-300`} />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center space-x-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="text-sm font-semibold">1.2k</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm font-semibold">45</span>
                  </div>
                </div>
              </div>

              {/* Video Indicator */}
              {item.type === 'video' && (
                <div className="absolute top-2 right-2 text-white">
                  <Film className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
