import React from 'react'

const LocationLists = () => {
  return (
    <div className='table-content'>
      <div className='table-title'>ALL CO-ORDINATES</div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th width='67%'>My Co-ordinates</th>
              <th width='20%'>DEFAULT</th>
              <th width='20%'>DEFAULT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>2------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>3------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>4------</td>
              <td>------</td>
              <td>------</td>
            </tr>
            <tr>
              <td>5------</td>
              <td>------</td>
              <td>------</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='route'>
        <button id='route'>Show Route</button>
      </div>
    </div>
  )
}

export default LocationLists
