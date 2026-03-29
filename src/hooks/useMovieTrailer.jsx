import { TMDB_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addTralerVideo } from '../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()

  const fetchTrailer = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieId + '/videos',
      TMDB_OPTIONS,
    )
    const videos = await data.json()

    const filteredData = videos.results.filter(
      (video) => video.type == 'Trailer',
    )
    const trailer = filteredData.length ? filteredData[0] : videos[0]

    dispatch(addTralerVideo(trailer))
  }

  useEffect(() => {
    fetchTrailer()
  }, [])
}

export default useMovieTrailer
