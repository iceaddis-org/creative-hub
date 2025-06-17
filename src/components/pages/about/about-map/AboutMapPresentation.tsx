'use client'

import dynamic from 'next/dynamic'
import type { MapContainerProps, TileLayerProps, MarkerProps } from 'react-leaflet'
import type { LatLngTuple } from 'leaflet'

const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), {
  ssr: false,
}) as (typeof import('react-leaflet'))['MapContainer']

const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), {
  ssr: false,
}) as (typeof import('react-leaflet'))['TileLayer']

const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), {
  ssr: false,
}) as (typeof import('react-leaflet'))['Marker']

const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
}) as (typeof import('react-leaflet'))['Popup']

type Branch = { id: string; position: [number, number]; description: string }

interface AboutMapPresentationProps {
  branches: Branch[]
}

export default function AboutMapPresentation({ branches }: AboutMapPresentationProps) {
  const center: LatLngTuple = branches[0]?.position ?? [0, 0]

  const mapProps: MapContainerProps = {
    center,
    zoom: 13,
    style: { height: '100%', width: '100%' },
    scrollWheelZoom: false,
  }

  const tileLayerProps: TileLayerProps = {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }

  const markerProps: MarkerProps = {
    position: center,
  }

  return (
    <section className="md:px-8 px-4 py-12">
      <div className="aspect-square w-full overflow-hidden rounded-2xl  md:aspect-banner">
        <MapContainer {...mapProps}>
          <TileLayer {...tileLayerProps} />
          {branches.map((branch) => (
            <Marker {...markerProps} key={branch.id} position={branch.position}>
              <Popup>{branch.description} </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  )
}
