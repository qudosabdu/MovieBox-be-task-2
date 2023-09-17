import { SiImdb } from "react-icons/si";
import { GiTomato } from "react-icons/gi";
import LikeButton from "./LikeButton";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieCard = ({ movie }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <div
      className="relative overflow-hidden bg-white rounded-md shadow-md transition transform hover:shadow-xl ease-in duration-200 m-4"
      
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full object-cover mb-4 h-[300px] sm:h-[400px]"
        width={500}
        height={500}
        onClick={handleCardClick}
      />
      <LikeButton />

      <div className="p-2" onClick={handleCardClick}>
        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
        <div className="flex items-center mb-2 justify-between">
          <div className="flex items-center mb-2">
            <span className="mr-2">
              <SiImdb
                size={25}
                style={{ color: "#000", background: "#fbbf14" }}
              />
            </span>
            <span style={{ color: "#fbbf14" }}>{movie.vote_average}/10</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2">
              <GiTomato size={25} style={{ color: "red" }} />
            </span>
            <span>{movie.popularity}%</span>
          </div>
        </div>
            <span className="ml-2">Release Date: {movie.release_date} </span>
      </div>
    </div>
  );
};

export default MovieCard;
