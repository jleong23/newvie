const API_KEY = "4a90b0a939c32a961c431d10b88d19be";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};


export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    // encodeURIComponent() is used to encode special characters in the query string
    //helps ensure that the string that are used (query) can safely be included in a URL
    
  const data = await response.json()
  return data.results;
}

