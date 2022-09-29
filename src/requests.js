const API_KEY = "7614dbedef682432e87322c44138d94d";

const requests = {
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `/trending/movie/week?api_key=${API_KEY}`,
};

export default requests;
