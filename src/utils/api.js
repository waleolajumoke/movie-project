// src/utils/api.js
import axios from 'axios';

const API_KEY = '778dcf02894f40ff2a5de48a0a87f49e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1, query = '') => {
  try {
    const endpoint = query
      ? `/search/movie?query=${query}&page=${page}`
      : `/movie/popular?page=${page}`;
    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: { api_key: API_KEY, append_to_response: 'videos' },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

// src/utils/api.js
export const fetchSimilarMovies = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}/similar`, {
        params: { api_key: API_KEY },
      });
      return response.data.results; // Return only the results array
    } catch (error) {
      console.error('Error fetching similar movies:', error);
      throw error;
    }
  };