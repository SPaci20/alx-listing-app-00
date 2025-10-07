import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/Pill';

// Background image constant - replace with your actual image path
const HERO_BACKGROUND = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const filters = ['Top Villa', 'Self Checkin', 'Luxury Villa', 'Mountain View', 'Beachfront', 'Pool', 'Pet Friendly'];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [properties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                {/* Property Image */}
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback image if the provided URL fails
                      (e.target as HTMLImageElement).src = `https://picsum.photos/400/300?random=${index}`;
                    }}
                  />
                  {property.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                      {property.discount}% OFF
                    </div>
                  )}
                </div>

                {/* Property Details */}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-gray-800">{property.name}</h3>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-sm text-gray-600">{property.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-2">
                    {property.address.city}, {property.address.state}, {property.address.country}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {property.category.slice(0, 2).map((cat, catIndex) => (
                      <span key={catIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {cat}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-800">${property.price}</span>
                      <span className="text-gray-600 text-sm"> / night</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {property.offers.bed} bed • {property.offers.shower} shower
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}