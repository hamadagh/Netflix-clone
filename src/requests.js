const key = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/day?api_key=${key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchScienceFicton: `/discover/movie?api_key=${key}&with_genres=878`,
  fetchDocumentary: `/discover/movie?api_key=${key}&with_genres=99`,
  fetchComedy: `/discover/movie?api_key=${key}&with_genres=35`,
  fetchAction: `/discover/movie?api_key=${key}&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=${key}&with_genres=27`,
  fetchFantasy: `/discover/movie?api_key=${key}&with_genres=14`,
  fetchFamily: `/discover/movie?api_key=${key}&with_genres=10751`,
  fetchDrama: `/discover/movie?api_key=${key}&with_genres=18`,
  fetchWar: `/discover/movie?api_key=${key}&with_genres=10752`,
  fetchHistory: `/discover/movie?api_key=${key}&with_genres=36`,
};

export default requests;
