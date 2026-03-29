import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if (movies === null) return

  const mainMovie = movies[2]
  const { title, overview, id } = mainMovie
  console.log(id)

  return (
    <div>
      <VideoTitle
        title={title}
        overview={overview}
      />
      ss
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
