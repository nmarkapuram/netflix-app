import { TMDB_OPTIONS } from '../utils/constant'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
  const trailStore = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  return (
    <div>
      <iframe
        className='w-screen aspect-video'
        src={
          'https://www.youtube.com/embed/NKYea63tQmI?si=' +
          trailStore?.key +
          '&autoplay=1&mute=1'
        }
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground
