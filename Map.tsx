"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Fix para los íconos de Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map({ position }: { position?: [number, number] }) {
  const [mapPosition, setMapPosition] = useState<[number, number]>([4.6097, -74.0817]); // Bogotá por defecto

  useEffect(() => {
    if (position) {
      setMapPosition(position);
    }
  }, [position]);

  function MapClickHandler() {
    useMapEvents({
      click: (e) => {
        setMapPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  }

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={mapPosition}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapPosition} icon={DefaultIcon}>
          <Popup>Ubicación seleccionada</Popup>
        </Marker>
        <MapClickHandler />
      </MapContainer>
    </div>
  );
}