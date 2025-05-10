import { createSlice } from "@reduxjs/toolkit";

// Create a slice named 'moviestore' to manage movie-related state
export const actionSlice = createSlice({
    name: 'moviestore',

    // Initial state: an array to hold movie detail objects
    initialState: {
        movies: []
    },

    // Reducers define how the state is modified
    reducers: {
        // detailStore adds a new movie's detail to the state if it's not already present
        detailStore: (state, action) => {
            // Wrap incoming movie data in an object
            const detail = { movie: action.payload };

            // Check if the movie with the same ID already exists in the state
            const movieExists = state.movies.some(
                (movie) => movie.movie.id === action.payload.id
            );

            // If not exists, add it to the movies array
            if (!movieExists) {
                state.movies.push(detail);
            }
        },
    },
});

// Export the action for dispatching
export const { detailStore } = actionSlice.actions;

// Export the reducer to be included in the store
export default actionSlice.reducer;
