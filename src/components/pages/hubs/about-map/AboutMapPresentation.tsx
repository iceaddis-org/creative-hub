'use client'

import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

export default function AboutMapPresentation() {
  const API_KEY = 'AIzaSyCzaXHlqPCHFVf-APQotB98t1OJjA5nZG0'

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
            {/* <AdvancedMarker
              title="Creative Hub Addis Ababa"
              position={{ lat: 9.03285, lng: 38.74998 }}
            /> */}

            {/* <AdvancedMarker position={{ lat: 9.03285, lng: 38.74998 }}>
              <Pin background={'#0f9d58'} borderColor={'#006425'} glyphColor={'#60d98f'} />
            </AdvancedMarker> */}
          </Map>
        </APIProvider>
      </div>
    </section>
  )
}
