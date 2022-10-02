const TMDB_API_KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  fetchNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
  fetchTvShows: `https://api.themoviedb.org/3/tv/popular?api_key=b4784d8b165037724c030744993f0789&language=en-US&page=1`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
};

export default requests;
