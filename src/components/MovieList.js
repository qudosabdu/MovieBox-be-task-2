import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=da3e751cf5ad5c250a200c7ed8300d64"
      );
      const data = await response.json();
      const topTenMovies = data.results.slice(0, 10);
      setMovies(topTenMovies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="px-2 py-20 md:px-24">
      <h1 className="mb-4 text-2xl font-bold">Featured Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
