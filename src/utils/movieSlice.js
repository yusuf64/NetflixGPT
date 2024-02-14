import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: null,
    trailer: null,
    trending: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlaying = action.payload;
    },

    addTrendingMovies: (state, action) => {
      state.trending = action.payload;
    },

    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlaying, addTrailer, addTrendingMovies } =
  movieSlice.actions;

export default movieSlice.reducer;
