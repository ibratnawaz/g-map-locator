import React from 'react'
import Form from './components/Form'
import LocationLists from './components/LocationLists'
import GMap from './components/GMap'

function App() {
  return (
    <div className='app'>
      <button id='home'>Home</button>
      <div className='container'>
        <Form />
        <div className='inner_container'>
          <LocationLists />
          <GMap />
        </div>
      </div>
    </div>
  )
}

export default App
