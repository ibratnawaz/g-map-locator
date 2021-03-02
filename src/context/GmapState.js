import React, { useReducer } from 'react'
import gmapContext from './gmapContext'
import GmapReducer from './gmapReducer'
import { SAVE_LOCATION, CLEAR_STATES, SET_LOADING, SHOW_ROUTE } from './type'

const GmapState = (props) => {
  const initialState = {
    locations: [],
    loading: false,
    showPath: false,
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

  // show path
  const markRoute = () => dispatch({ type: SHOW_ROUTE })

  //   set loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  // clear users
  const clearState = () => dispatch({ type: CLEAR_STATES })

  return (
    <gmapContext.Provider
      value={{
        locations: state.locations,
        loading: state.loading,
        showPath: state.showPath,
        saveLocation,
        setLoading,
        clearState,
        markRoute,
      }}>
      {props.children}
    </gmapContext.Provider>
  )
}

export default GmapState
