import React from 'react'
import Form from './components/Form'
import LocationLists from './components/LocationLists'
import MapBox from './components/MapBox'

import GmapState from './context/GmapState'

function App() {
  return (
    <GmapState>
      <div className='app'>
        <button id='home'>Home</button>
        <div className='container'>
          <Form />
          <div className='inner_container'>
            <LocationLists />
            <MapBox />
          </div>
        </div>
      </div>
    </GmapState>
  )
}

export default App
