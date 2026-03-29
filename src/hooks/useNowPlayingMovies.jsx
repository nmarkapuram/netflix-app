import { useEffect } from 'react'
import { TMDB_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'

const useNowPlayingMOvies = () => {
  const dispatch = useDispatch()

  const fetchNowPlayingMovies = async () => {
    const res = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing',
      TMDB_OPTIONS,
    )
    const movies = await res.json()
    dispatch(addNowPlayingMovies(movies.results))
  }

  useEffect(() => {
    fetchNowPlayingMovies()
  }, [])
}

export default useNowPlayingMOvies
