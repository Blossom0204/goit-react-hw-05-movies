import axios from 'axios'

const API_KEY = 'e30273ee0983b97c569e9a566a395186'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

export const fetchTrendingMovies = async () => {
  const params = `trending/movie/week`
  const response = await axios.get(`${params}?api_key=${API_KEY}`)
  return response.data
}

export const fetchMovie = async (movieId) => {
  const params = `movie/${movieId}`
  const response = await axios.get(`${params}?api_key=${API_KEY}`)
  return response.data
}

export const fetchSearchMovie = async (searchQuery) => {
  const params = `search/movie`
  const response = await axios.get(
    `${params}?api_key=${API_KEY}&query=${searchQuery}`,
  )
  return response.data
}

export const fetchCast = async (movieId) => {
  const params = `movie/${movieId}/credits`
  const response = await axios.get(`${params}?api_key=${API_KEY}`)
  return response.data
}

export const fetchReviews = async (movieId) => {
  const params = `movie/${movieId}/reviews`
  const response = await axios.get(`${params}?api_key=${API_KEY}`)
  return response.data
}
