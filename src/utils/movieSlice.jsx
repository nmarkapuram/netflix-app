import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addTralerVideo: (state, action) => {
      state.trailVideo = action.payload
    },
  },
})

export const { addNowPlayingMovies, addTralerVideo } = movieSlice.actions
export default movieSlice.reducer
