import React, { useReducer } from 'react'
import gmapContext from './gmapContext'
import GmapReducer from './gmapReducer'
import { SAVE_LOCATION, CLEAR_STATES, SET_LOADING } from './type'

const GmapState = (props) => {
  const initialState = {
    locations: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(GmapReducer, initialState)

  //   saving location
  const saveLocation = async (data) => {
    setLoading()
    dispatch({
      type: SAVE_LOCATION,
      payload: data,
    })
  }

  //   set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  // clear users
  const clearState = () => dispatch({ type: CLEAR_STATES })

  return (
    <gmapContext.Provider
      value={{
        locations: state.locations,
        loading: state.loading,
        saveLocation,
        setLoading,
        clearState,
      }}>
      {props.children}
    </gmapContext.Provider>
  )
}

export default GmapState
