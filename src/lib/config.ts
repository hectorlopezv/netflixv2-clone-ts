export const config_api = {
    key: "39416efd29e43f0d9f84a578480856a2"
    
 }
 //requests
export const request = {
    fetchTrending: `/trending/all/week?api_key=${config_api.key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${config_api.key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${config_api.key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${config_api.key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${config_api.key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${config_api.key}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${config_api.key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${config_api.key}&with_genres=99`,
}
