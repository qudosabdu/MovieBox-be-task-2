import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard"; // Import your MovieCard component

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const sliderRef = useRef(null);

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=da3e751cf5ad5c250a200c7ed8300d64"
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="px-2 py-10 md:px-24 bg-gray-100">
      {" "}
      {/* Change the background color here */}
      <h1 className="mb-4 text-2xl font-bold">Top Rated</h1>
      <div className="relative">
        <Slider {...settings} ref={sliderRef}>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="transform hover:scale-110 transition-transform"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </Slider>
        <div
          className="absolute top-1/2 -left-8 z-10 cursor-pointer bg-white text-black p-2 rounded-full shadow-md opacity-50 hover:opacity-100"
          onClick={goToPrev}
        >
          {/* Left Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          className="absolute top-1/2 -right-8 z-10 cursor-pointer bg-white text-black p-2 rounded-full shadow-md opacity-50 hover:opacity-100"
          onClick={goToNext}
        >
          {/* Right Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
