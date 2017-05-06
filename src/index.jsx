import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { loadMovies } from './actions/movieInfoActions'
import App from './components/App'

const store = configureStore()

// 1. Call dispatch on the store with an argument of this action that makes an API request
// 2. The loadMovies() action is invoked, which makes an API call, and dispatches the loadCoursesSuccess action
// 3. that action: store -> root reducer -> courses reducer
// 4. courses reducer handles that action, recieves course payload and return new state that has courses: courses payload
// 5. the VideoTitleContainer component is connected to the store, so store's new state triggers the mapStateToProps function, which triggers the render function on that component
store.dispatch(loadMovies())

render(
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={App} />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
