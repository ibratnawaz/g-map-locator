import React, { useContext, useState, useRef, useEffect } from 'react'
import GmapContext from '../context/gmapContext'

const Form = () => {
  const gmapContext = useContext(GmapContext)
  const { saveLocation } = gmapContext

  const refPlace = useRef(null)

  const [place, setPlace] = useState('')
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')

  useEffect(() => {
    refPlace.current.focus()
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    saveLocation({ place, lat, lng })
    setPlace('')
    setLat('')
    setLng('')
  }

  return (
    <div className='form_container'>
      <form onSubmit={submitHandler}>
        <div className='location-box'>
          <label htmlFor='place'>Location Name</label>
          <input
            type='text'
            id='place'
            placeholder='Location'
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            ref={refPlace}
            required
          />
        </div>
        <div className='latitude'>
          <label htmlFor='lat'>Enter Latitude</label>
          <input
            type='text'
            value={lat}
            id='lat'
            placeholder='Lat'
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </div>
        <div className='longitude'>
          <label htmlFor='lng'>Enter Longitude</label>
          <input
            type='text'
            value={lng}
            id='lng'
            placeholder='Lng'
            onChange={(e) => setLng(e.target.value)}
            required
          />
        </div>
        <div className='submit'>
          <button id='submit'> SUBMIT </button>
        </div>
      </form>
    </div>
  )
}

export default Form
