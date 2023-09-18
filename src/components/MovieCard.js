import { useState, useEffect } from "react";
import { SiImdb } from "react-icons/si";
import { GiTomato } from "react-icons/gi";
import LikeButton from "./LikeButton";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  const router = useRouter();
  const [genres, setGenres] = useState([]);

  // Function to fetch genre names based on genre IDs
  const fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=da3e751cf5ad5c250a200c7ed8300d64`
    );
    const data = await response.json();
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const getGenreNames = () => {
    const genreNames = movie.genre_ids.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : ",";
    });
    return genreNames.join(", ");
  };

  const handleCardClick = () => {
    router.push(`/movies/${movie.id}`);
  };

  const year = movie.release_date.slice(0, 4);

  return (
    <div
      className="relative overflow-hidden bg-white rounded-md shadow-md transition transform hover:shadow-xl ease-in duration-200 m-4"
      data-testid="movie-card"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-cover mb-4 h-[300px] sm:h-[400px]"
        width={500}
        height={500}
        onClick={handleCardClick}
        data-testid="movie-poster"
      />
      <LikeButton />

      <div className="p-2" onClick={handleCardClick}>
        <p
          className="text-sm font-medium text-gray-400 mb-2"
          data-testid="movie-overview"
        >
          USA, {year}
        </p>
        <h4 className="text-xl font-bold mb-2" data-testid="movie-title">
          {movie.title}
        </h4>
        <div className="flex items-center mb-2 justify-between">
          <div className="flex items-center mb-2">
            <span className="mr-2">
              <SiImdb
                size={25}
                style={{ color: "#000", background: "#fbbf14" }}
              />
            </span>
            <span style={{ color: "#fbbf14" }}>{(movie.vote_average  * 10)}/100</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">
              <GiTomato size={25} style={{ color: "red" }} />
            </span>
            <span>{movie.popularity.toFixed(0)}%</span>
          </div>
        </div>
        <p className="text-xs font-medium text-gray-400">
          {getGenreNames()}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
