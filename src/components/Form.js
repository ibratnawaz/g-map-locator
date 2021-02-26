import React from 'react'

const Form = () => {
  return (
    <div className='form_container'>
      <form>
        <div className='location-box'>
          <label htmlFor='place'>Location Name</label>
          <input type='text' id='place' placeholder='Location' />
        </div>
        <div className='latitude'>
          <label htmlFor='lat'>Enter Latitude</label>
          <input type='text' id='lat' placeholder='Lat' />
        </div>
        <div className='longitude'>
          <label htmlFor='lng'>Enter Longitude</label>
          <input type='text' id='lng' placeholder='Lng' />
        </div>
        <div className='submit'>
          <button id='submit'> SUBMIT </button>
        </div>
      </form>
    </div>
  )
}

export default Form
