import React from 'react';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal,
  Home,
  Search,
  PlusSquare,
  Compass,
  Film,
  Menu
} from 'lucide-react';

interface User {
  username: string;
  avatar: string;
  isVerified?: boolean;
}

interface Story {
  id: number;
  user: User;
  isSeen: boolean;
}

interface Post {
  id: number;
  user: User;
  image: string;
  likes: number;
  caption: string;
  comments: number;
  timestamp: string;
  isLiked: boolean;
  isSaved: boolean;
}

const mockStories: Story[] = [
  { id: 1, user: { username: 'your_story', avatar: 'bg-gray-300' }, isSeen: false },
  { id: 2, user: { username: 'john_doe', avatar: 'bg-blue-400', isVerified: true }, isSeen: true },
  { id: 3, user: { username: 'jane_smith', avatar: 'bg-pink-400' }, isSeen: true },
  { id: 4, user: { username: 'alex_wang', avatar: 'bg-green-400' }, isSeen: true },
  { id: 5, user: { username: 'sarah_rocks', avatar: 'bg-purple-400', isVerified: true }, isSeen: true },
  { id: 6, user: { username: 'mike_photos', avatar: 'bg-yellow-400' }, isSeen: true },
];

const mockPosts: Post[] = [
  {
    id: 1,
    user: { username: 'john_doe', avatar: 'bg-blue-400', isVerified: true },
    image: 'bg-gradient-to-br from-blue-300 to-purple-300',
    likes: 1234,
    caption: 'Beautiful sunset at the beach 🌅 #nature #photography',
    comments: 89,
    timestamp: '2 hours ago',
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    user: { username: 'jane_smith', avatar: 'bg-pink-400' },
    image: 'bg-gradient-to-br from-pink-300 to-orange-300',
    likes: 892,
    caption: 'New recipe I tried today! Absolutely delicious 😋 #foodie #homemade',
    comments: 45,
    timestamp: '5 hours ago',
    isLiked: true,
    isSaved: false
  },
  {
    id: 3,
    user: { username: 'alex_wang', avatar: 'bg-green-400', isVerified: true },
    image: 'bg-gradient-to-br from-green-300 to-blue-300',
    likes: 3401,
    caption: 'Morning workout complete! 💪 #fitness #morningmotivation',
    comments: 156,
    timestamp: '8 hours ago',
    isLiked: false,
    isSaved: true
  }
];

const suggestedUsers: User[] = [
  { username: 'suggested_user1', avatar: 'bg-indigo-400' },
  { username: 'suggested_user2', avatar: 'bg-red-400' },
  { username: 'suggested_user3', avatar: 'bg-teal-400' },
];

export default function InstagramHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Instagram</div>
            <div className="flex items-center space-x-6">
              <Home className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <MessageCircle className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <PlusSquare className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Compass className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <Heart className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
              <div className="w-8 h-8 rounded-full bg-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="md:col-span-2">
            {/* Stories */}
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {mockStories.map((story) => (
                  <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${story.isSeen ? 'p-0' : 'p-0.5 bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
                      <div className={`w-full h-full rounded-full ${story.user.avatar} border-2 ${story.isSeen ? 'border-gray-300' : 'border-white'}`} />
                    </div>
                    <span className="text-xs text-gray-600 truncate w-20 text-center">{story.user.username}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {mockPosts.map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-lg">
                  {/* Post Header */}
                  <div className="flex justify-between items-center p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${post.user.avatar}`} />
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold text-sm">{post.user.username}</span>
                        {post.user.isVerified && <span className="text-blue-500">✓</span>}
                      </div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 cursor-pointer" />
                  </div>

                  {/* Post Image */}
                  <div className={`w-full h-96 ${post.image}`} />

                  {/* Post Actions */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <Heart className={`w-6 h-6 cursor-pointer ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                        <MessageCircle className="w-6 h-6 cursor-pointer" />
                        <Send className="w-6 h-6 cursor-pointer" />
                      </div>
                      <Bookmark className={`w-6 h-6 cursor-pointer ${post.isSaved ? 'fill-black' : ''}`} />
                    </div>

                    {/* Likes */}
                    <p className="font-semibold text-sm">{post.likes.toLocaleString()} likes</p>

                    {/* Caption */}
                    <p className="text-sm">
                      <span className="font-semibold mr-2">{post.user.username}</span>
                      {post.caption}
                    </p>

                    {/* Comments */}
                    <p className="text-sm text-gray-500 cursor-pointer">View all {post.comments} comments</p>

                    {/* Timestamp */}
                    <p className="text-xs text-gray-500 uppercase">{post.timestamp}</p>
                  </div>

                  {/* Add Comment */}
                  <div className="border-t border-gray-200 p-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="text" 
                        placeholder="Add a comment..." 
                        className="flex-1 text-sm outline-none"
                      />
                      <button className="text-blue-500 font-semibold text-sm">Post</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:block">
            {/* User Profile */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold text-sm">your_username</p>
                  <p className="text-sm text-gray-500">Your Name</p>
                </div>
              </div>
              <button className="text-blue-500 text-xs font-semibold">Switch</button>
            </div>

            {/* Suggestions */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold text-gray-500">Suggested for you</p>
                <p className="text-xs font-semibold cursor-pointer">See all</p>
              </div>
              <div className="space-y-3">
                {suggestedUsers.map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full ${user.avatar}`} />
                      <div>
                        <p className="text-sm font-semibold">{user.username}</p>
                        <p className="text-xs text-gray-500">Suggested for you</p>
                      </div>
                    </div>
                    <button className="text-blue-500 text-xs font-semibold">Follow</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="text-xs text-gray-400 space-y-2">
              <div className="flex flex-wrap gap-2">
                {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'].map(link => (
                  <a key={link} href="#" className="hover:underline">{link}</a>
                ))}
              </div>
              <p>© 2024 INSTAGRAM FROM META</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
