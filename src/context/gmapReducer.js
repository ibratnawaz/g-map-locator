import { SAVE_LOCATION, SHOW_ROUTE, CLEAR_STATES, SET_LOADING } from './type'

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        locations: [...state.locations, action.payload],
        loading: false,
      }
    case SHOW_ROUTE:
      return {
        ...state,
        loading: false,
      }
    case CLEAR_STATES:
      return {
        ...state,
        locations: [],
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }

    default:
      return state
  }
}
