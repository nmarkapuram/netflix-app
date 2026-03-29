import React from 'react'
import Header from './Header'
import useNowPlayingMOvies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainCOntainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMOvies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse
