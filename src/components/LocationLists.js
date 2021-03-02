import React, { useContext, useEffect, useState } from 'react'
import GmapContext from '../context/gmapContext'

const LocationLists = () => {
  const gmapContext = useContext(GmapContext)
  const { locations, markRoute } = gmapContext

  const [disable, setDisable] = useState(true)
  useEffect(() => {
    console.log(locations)
    if (locations.length) setDisable(false)
  }, [locations])

  return (
    <div className='table-content'>
      <div className='table-title'>ALL CO-ORDINATES</div>
      <div className='table'>
        {locations.length === 0 ? (
          <h3>No locations added...</h3>
        ) : (
          <table>
            <thead>
              <tr>
                <th width='67%'>My Co-ordinates</th>
                <th width='20%'>DEFAULT</th>
                <th width='20%'>DEFAULT</th>
              </tr>
            </thead>
            <tbody>
              {locations.map((val, index) => (
                <tr key={index}>
                  <td>
                    {index + 1}) {val.place}
                  </td>
                  <td>{val.lat}</td>
                  <td>{val.lng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className='route'>
        <button id='route' disabled={disable} onClick={()=>markRoute()}>
          Show Route
        </button>
      </div>
    </div>
  )
}

export default LocationLists
