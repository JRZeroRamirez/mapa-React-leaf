"use client";
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: '/marker-icon.png', // Coloca tu ícono en /public
  iconSize: [32, 32],
});

export default function CustomMarker({ position, text }: { position: [number, number]; text: string }) {
  return (
    <Marker position={position} icon={customIcon}>
      <Popup>{text}</Popup>
    </Marker>
  );
}