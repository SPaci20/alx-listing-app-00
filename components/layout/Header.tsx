import { useState } from 'react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Beachfront', 'Luxury Villa', 'Mountain View', 'City View'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">LuxStay</div>
          
          {/* Search Bar */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations, properties..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-1 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-6 py-2">
            {accommodationTypes.map((type) => (
              <button
                key={type}
                className="whitespace-nowrap px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;