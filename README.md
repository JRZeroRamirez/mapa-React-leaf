# mapa-React-leaf
Mapa desarrollado en leaf implementado con react y next.js


# Mapa Interactivo con Next.js

Aplicación web que permite buscar ubicaciones y mostrarlas en un mapa interactivo con funcionalidad bidireccional.
# Estructura

netx.js
mapa-interactivo/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos Tailwind
├── components/
│   ├── Map.tsx             # Componente del mapa
│   └── SearchBar.tsx       # Componente de búsqueda
├── lib/
│   └── locationUtils.ts    # Funciones auxiliares
├── public/                 # Assets estáticos
├── tailwind.config.js      # Config Tailwind
└── next.config.js          # Config Next.js


## Características Principales

- Búsqueda de ubicaciones con autocompletado
- Mapa interactivo con marcadores
- Interacción bidireccional (búsqueda ↔ mapa)
- Diseño responsive (funciona en móviles y desktop)
- 100% open-source (sin costos de APIs)

## Tecnologías Utilizadas

- **Frontend**: Next.js 13 (App Router) + React 18
- **Mapas**: Leaflet.js + OpenStreetMap
- **Geocodificación**: API Nominatim
- **Estilos**: Tailwind CSS
- **Despliegue**: Vercel

## Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js 18+
- npm 9+ o yarn 1.22+

### Instalación
```bash

git clone https://github.com/tu-usuario/mapa-interactivo.git
cd mapa-interactivo
npm install
npm run dev
