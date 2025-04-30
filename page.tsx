"use client"; 

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import Map from '@/components/Map';
import './leaflet-fix.css';

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>();

  const handleLocationSelect = (location: any) => {
    setSelectedLocation([parseFloat(location.lat), parseFloat(location.lon)]);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Mapa Interactivo con Next.js
        </h1>
        <SearchBar onSelectLocation={handleLocationSelect} />
        <Map position={selectedLocation} />
      </div>
    </main>
  );
}