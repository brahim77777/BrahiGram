import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  Smile, 
  MapPin, 
  Tag, 
  ChevronDown,
  User,
  Users,
  AtSign,
  XCircle
} from 'lucide-react';

export default function CreatePost() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState('Everyone');

  const filters = [
    { name: 'Original', class: '' },
    { name: 'Clarendon', class: 'filter-clarendon' },
    { name: 'Gingham', class: 'filter-gingham' },
    { name: 'Moon', class: 'filter-moon' },
    { name: 'Lark', class: 'filter-lark' },
    { name: 'Reyes', class: 'filter-reyes' },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, you'd create a URL.createObjectURL(file)
      // For demo, we'll use a placeholder
      setSelectedImage('image-uploaded');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Instagram</div>
            <div className="flex items-center space-x-6">
              {/* Placeholder nav icons */}
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

      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Create Post Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <button className="text-lg">
              <X className="w-6 h-6" />
            </button>
            <h2 className="font-semibold">Create new post</h2>
            <button 
              className="text-blue-500 font-semibold text-sm disabled:text-blue-200"
              disabled={!selectedImage}
            >
              Share
            </button>
          </div>

          <div className="flex">
            {/* Image Section */}
            <div className="w-2/3 border-r border-gray-200">
              {!selectedImage ? (
                <div className="h-96 flex flex-col items-center justify-center space-y-4">
                  <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center">
                    <Upload className="w-12 h-12 text-gray-400" />
                  </div>
                  <p className="text-xl text-gray-600">Drag photos and videos here</p>
                  <input 
                    type="file" 
                    accept="image/*,video/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label 
                    htmlFor="file-upload" 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
                  >
                    Select from computer
                  </label>
                </div>
              ) : (
                <div className="relative">
                  {/* Selected Image */}
                  <div className="h-96 bg-gradient-to-br from-blue-300 to-purple-300" />
                  
                  {/* Filters */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      className="bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm"
                    >
                      Filters
                    </button>
                  </div>

                  {/* Close Button */}
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-1"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="w-1/3 p-4 space-y-4">
              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <span className="font-semibold text-sm">your_username</span>
              </div>

              {/* Caption */}
              <div>
                <textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full h-32 p-2 border border-gray-200 rounded-md resize-none text-sm outline-none focus:border-gray-400"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-2">
                    <Smile className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <MapPin className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <AtSign className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <Tag className="w-5 h-5 text-gray-600 cursor-pointer" />
                  </div>
                  <span className="text-xs text-gray-400">{caption.length}/2,200</span>
                </div>
              </div>

              {/* Location */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Add location</span>
                  <MapPin className="w-4 h-4 text-gray-600" />
                </div>
              </div>

              {/* Accessibility */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">Accessibility</p>
                    <p className="text-xs text-gray-500">Alt text describes your photos</p>
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">Advanced settings</p>
                </div>
              </div>

              {/* Audience */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => {}}>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Audience</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">{selectedAudience}</span>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>

              {/* Hide Likes */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold">Hide like and view counts</p>
                    <p className="text-xs text-gray-500">Only you will see the total number</p>
                  </div>
                  {/* Toggle would go here */}
                </div>
              </div>

              {/* Turn Off Comments */}
              <div className="border border-gray-200 rounded-md p-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-semibold">Turn off commenting</p>
                  {/* Toggle would go here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
