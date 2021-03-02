import React, { useEffect, useContext, useState } from 'react'
import ReactMapGl, {
  Marker,
  GeolocateControl,
  Source,
  Layer,
} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import GmapContext from '../context/gmapContext'

const MapBox = () => {
  const gmapContext = useContext(GmapContext)
  const { locations, showPath } = gmapContext

  const [viewport, setViewport] = React.useState({
    latitude: 23.2584857,
    longitude: 77.5912997,
    zoom: 3,
    width: '100%',
    height: '100%',
  })

  const [coord, setCoord] = useState([])

  useEffect(() => {
    console.log(showPath, locations)
    if (showPath && coord.length < locations.length) {
      locations.map((val) =>
        setCoord((prevState) => [...prevState, [val.lng, val.lat]])
      )
    }
    // eslint-disable-next-line
  }, [locations, showPath, coord])

  const data = {
    type: 'Feature',
    geometry: {
      type: 'LineString',
      coordinates: coord,
    },
  }

  return (
    <div className='google-map'>
      <ReactMapGl
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
        {...viewport}
        mapStyle='mapbox://styles/mapbox/streets-v11'
        onViewportChange={(viewport) => setViewport(viewport)}
        viewportChangeMethod={'flyTo'}>
        {locations.map((mark, index) => (
          <Marker
            key={index}
            latitude={parseInt(mark.lat)}
            longitude={parseInt(mark.lng)}
            offsetTop={-20}
            offsetLeft={-10}>
            <button className='marker-btn'>
              <img
                src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png'
                alt='marker-icon'
              />
            </button>
          </Marker>
        ))}
        <GeolocateControl position='top-right' />
        <Source id='route' type='geojson' data={data} />
        <Layer
          id='route'
          type='line'
          source='route'
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': '#888',
            'line-width': 8,
          }}
        />
      </ReactMapGl>
    </div>
  )
}

export default MapBox
