import React from "react";
import { FaStar } from "react-icons/fa";
import MovieDetailSidebar from "./MovieDetailSidebar";
import Image from "next/image";
import { BsListUl } from "react-icons/bs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Spin, Space } from "antd";

const MovieDetailPage = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=da3e751cf5ad5c250a200c7ed8300d64`
        );
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);

  if (!movieDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Space size="large">
          <Spin size="large" />
        </Space>
      </div>
    );
  }

  const totalMinutes = movieDetails.runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedTime = `${hours}h ${minutes}m`;

  const rating = movieDetails.vote_average.toFixed(1);
  const years = movieDetails.release_date.split("-")[0];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 hidden  md:block">
        <MovieDetailSidebar />
      </div>
      <div className="w-full md:w-3/4 p-4 md:p-8">
        <div className="flex mb-4 md:mb-6">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            width={500}
            height={200}
            alt={movieDetails.title}
            className="w-full rounded-3xl"
          />
        </div>

        <div className="flex flex-col md:flex-row mb-4 md:mb-6 justify-between">
          <div className="w-full md:w-2/3 md:pr-8">
            <div>
              <div className="font-bold text-lg md:text-base mb-2 text-gray-600">
                {movieDetails.title} • &nbsp;
                <span
                  className="text-sm md:text-base ml-1"
                  data-testid="movie-release-date"
                >
                  {years}
                </span>
                • PG-13&nbsp; • {hours}h {minutes}m • Action, Drama
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {movieDetails.overview}
              </p>
              <div className="mt-2 md:mt-4">
                <div className="flex mb-2">
                  <span className="mr-2">Director:</span>
                  <span>Joseph Kosinski</span>
                </div>
                <div className="flex mb-2">
                  <span className="block mr-2">Writers:</span>
                  <span>Jim Cash, Jack Epps Jr, Peter Craig</span>
                </div>
                <div className="flex">
                  <span className="block mr-2">Stars:</span>
                  <span>Tom Cruise, Jennifer Connelly, Miles Teller</span>
                </div>
              </div>

              <div className="flex mt-2 md:mt-4 w-full bg-[#C7C7C7] rounded items-center">
                <div className="font-medium p-2 md:p-5 bg-[#BE123C] rounded-lg mr-2 md:mr-6">
                  Top rated movie #65
                </div>
                <span className="font-medium">Awards 9 nominations</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 mt-4 md:mt-0">
            <div>
              <div className="flex items-center mb-2">
                <FaStar className="text-yellow-500" />
                <span className="ml-1 text-lg font-semibold">
                  {movieDetails.vote_average}
                </span>
                <span className="ml-1 text-lg font-semibold">| 385k</span>
              </div>
              <div className="mb-2">
                <span className="block relative text-lg font-semibold w-full h-[55px] bg-[#BE123C] p-2 md:p-4 rounded-md">
                  See Showtimes
                </span>
              </div>
              <div className="mb-2">
                <span className="block relative text-lg font-semibold w-full h-[55px] bg-[#f8e7eb] p-2 md:p-4 rounded-md">
                  More Watch Options
                </span>
              </div>
            </div>
            <div className="mb-4 items-center block">
              <div className="block relative mt-5  w-[22.5rem] h-[14.31rem]">
                {" "}
                <Image
                  className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
                  alt=""
                  src="/RectangleSide.png"
                  width={360}
                  height={228}
                />
                <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
                <BsListUl className="absolute top-[12.31rem] left-[0.88rem] w-[1.69rem] h-[1.69rem] object-cover" />
                <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
                  The Best Movies and Shows in September
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
