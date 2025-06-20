'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'
// import dynamic from 'next/dynamic'
import type { Branch } from './AboutMapContainer'

// const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
//   ssr: false,
// }) as (typeof import('react-leaflet'))['MapContainer']

// const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
//   ssr: false,
// }) as (typeof import('react-leaflet'))['TileLayer']

// const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
//   ssr: false,
// }) as (typeof import('react-leaflet'))['Marker']

// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
//   ssr: false,
// }) as (typeof import('react-leaflet'))['Popup']

// type Branch = { id: string; position: [number, number]; description: string }

interface AboutMapPresentationProps {
  branches: Branch[]
}

export default function AboutMapPresentation({ branches }: AboutMapPresentationProps) {
  const API_KEY = process.env.GOOGLE_MAPS_API_KEY || ''

  return (
    <section className="md:px-8 px-4 py-12 max-h-[80vh] overflow-hidden">
      <div className="aspect-square w-full overflow-hidden rounded-2xl  md:aspect-banner">
        <APIProvider apiKey={API_KEY}>
          <Map
            style={{ width: '100vw', height: '100vh' }}
            defaultCenter={{ lat: 9.024914681988621, lng: 38.759114460381866 }}
            defaultZoom={15}
            gestureHandling={'none'}
            disableDefaultUI={true}
          >
            <Marker position={{ lat: 9.03285, lng: 38.74998 }} />
          </Map>
        </APIProvider>
      </div>
    </section>
  )
}
