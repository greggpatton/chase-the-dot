import * as types from '../actions/actionTypes'
// import initialState from './initialState'


export default function moviesReducer (state = [], action) {
  // state variable here reps just an array of movies
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return Object.assign([], action.movies)
    default:
      return state
  }
}
