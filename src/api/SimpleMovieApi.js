export default class SimpleMovieApi {
  static getMovies () {
    return window.fetch('https://simple-movie-api.herokuapp.com').then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }
}
