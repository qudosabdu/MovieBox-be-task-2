import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MovieDetailSidebar from "./MovieDetailSidebar";
import FilmCard from "@/pages/main/filmCard";
import { BsStarHalf } from "react-icons/bs";
import Image from "next/image";

const MovieDetail = () => {
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
    return <div>Loading...</div>;
  }

  const totalMinutes = movieDetails.runtime;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedTime = `${hours}h ${minutes}m`;

  const dateString = movieDetails.release_date;
  const year = new Date(dateString).getFullYear();

  const rating = (movieDetails.vote_average).toFixed(1);

  return (
    <div className="flex">
      <MovieDetailSidebar />
      <div className="p-4 max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            className="w-full h-auto object-cover max-h-[400px] sm:max-h-[600px]"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center mb-2 justify-evenly">
          <h1 className="text-2xl font-bold mb-2" data-testid="movie-title">
            {movieDetails.title}
          </h1>
          <span className="text-sm md:text-base ml-1">PG-13</span>
          {/* <span
            className="text-sm md:text-base ml-1"
            data-testid="movie-release-date"
          >
            {year}
          </span>
          <span
            className="text-sm md:text-base ml-1"
            data-testid="movie-runtime"
          >
            {formattedTime}
          </span> */}
          
          <div className="flex items-center">
            <BsStarHalf className="text-yellow-500" />
            <span className="text-sm md:text-base ml-1" data-testid="movie-rating">
              {rating}
            </span>
            </div>
        </div>

        <div className="text-xl">{movieDetails.overview}</div>
      </div>
    </div>
  );
};

export default MovieDetail;

// import Link from "next/link";
// import { FaHome, FaStarAndCrescent } from "react-icons/fa";

// import { BsFillPlayFill, BsFillBookmarkFill , BsStarHalf} from "react-icons/bs";
// import { BiShareAlt } from "react-icons/bi";
// import { GiTicket } from "react-icons/gi";
// import { BsHeartFill } from "react-icons/bs";
// import { BsListUl } from "react-icons/bs";
// import { IoIosArrowDropdown } from "react-icons/io";
// import { IoLogOutOutline } from "react-icons/io5";
// import { CgCalendarDates } from "react-icons/cg";
// import { BiCameraMovie } from "react-icons/bi";
// import Image from "next/image";
// import { BsStarHalf } from "react-icons/bs";

// const MovieDetail = () => {
//   const router = useRouter();
//   const { movieId } = router.query;
//   const [movieDetails, setMovieDetails] = useState(null);

//   useEffect(() => {
//     if (movieId) {
//       fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}?api_key=da3e751cf5ad5c250a200c7ed8300d64`
//       )
//         .then((response) => response.json())
//         .then((data) => setMovieDetails(data))
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [movieId]);

//   // Add a state to track window width
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 0
//   );

//   // Update window width when it changes
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   }

// Define some styles for responsive layout
const responsiveStyles = {
  // Define your responsive styles here based on windowWidth
  // Example:
  // container: { maxWidth: "100%" },
  // ...
};
//   const playIcon = <BsFillPlayFill />;
//   return (
//     <div className="relative bg-white w-full h-[61.38rem] overflow-y-auto text-left text-[0.88rem] text-gainsboro-100 font-poppins">
//       <section
//         className="absolute top-[2.38rem] left-[16.44rem] w-[74.88rem] h-[28.06rem] text-left text-[1.56rem] text-gainsboro-100 font-poppins"
//         Trailer="movieTrailer"
//       >
//         <Image
//           src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
//           alt={movieDetails.title}
//           className="bsolute top-[0rem] left-[0rem] rounded-xl w-[74.88rem] h-[28.06rem] object-cover"
//           width={1198}
//           height={446}
//         />
//         <div className="absolute top-[8.25rem] left-[32.56rem] w-[10.5rem] h-[9.81rem]">
//           <div className="absolute top-[-0.06rem] left-[1.75rem] rounded-[50%] bg-['#E8E8E8']opacity-50 shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(4px)] box-border w-[7rem] h-[7rem] border-[2px] border-solid border-gainsboro-200" />
//           <BsFillPlayFill className="absolute top-[1.63rem] left-[3.31rem] w-[3.88rem] h-[3.88rem] object-cover text-white " />
//           <div className="absolute top-[7.44rem] left-[0rem] font-medium [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
//             Watch Trailer
//           </div>
//         </div>
//       </section>

//       <div className="absolute text-black top-[32.38rem] left-[17.56rem] w-[48.38rem] h-[9.38rem] text-[0.94rem] text-firebrick">
//         <div className="absolute top-[0rem] left-[0rem] text-[1.44rem] text-darkslategray-100">
//           <span className="font-medium">Top Gun: Maverick</span>
//           <span>•</span>
//           <span className="font-medium">{movieDetails.release_date}</span>
//           <span>•</span>
//           <span className="font-medium">PG-13</span>
//           <b>•</b>
//           <span className="font-medium">2h 10m</span>
//         </div>
//         <div className="absolute top-[0.19rem] left-[33.25rem] rounded-mini box-border w-[5.25rem] h-[1.88rem] border-[1px] border-solid border-lavenderblush-100" />
//         <div className="absolute top-[0.19rem] left-[39.19rem] rounded-mini box-border w-[5.25rem] h-[1.88rem] border-[1px] border-solid border-lavenderblush-100" />
//         <div className="absolute top-[0.38rem] left-[34.31rem] font-medium">
//           Action
//         </div>
//         <div className="absolute top-[0.38rem] left-[40.13rem] font-medium">
//           Drama
//         </div>
//         <div className="absolute top-[3.75rem] left-[0rem] text-[1.25rem] text-darkslategray-200 ">
//           <p className="m-0">
//             After thirty years, Maverick is still pushing the envelope as a top
//             naval aviator,
//           </p>
//           <p className="m-0">
//             but must confront ghosts of his past when he leads TOP GUN's elite
//             graduates
//           </p>
//           <p className="m-0">
//             on a mission that demands the ultimate sacrifice from those chosen
//             to fly it.
//           </p>
//         </div>
//       </div>
//       <div className="text-black absolute top-[32.25rem] left-[67.56rem] w-[22.5rem] h-[11.5rem] text-[1.25rem]">
//         <div className="absolute top-[0rem] left-[13.5rem] w-[9rem] h-[2.38rem] text-[1.56rem]">
//           <BsStarHalf className="absolute top-[0.19rem] left-[0rem] w-[1.88rem] h-[1.88rem] object-cover text-yellow-500" />
//           <div className="absolute top-[0rem] left-[2.44rem] font-medium">
//             <span>{movieDetails.vote_average}</span>
//             <span className="text-[1.25rem] text-dimgray">| 350k</span>
//           </div>
//         </div>
//         <BsHeartFill className="text-black file:absolute top-[0.13rem] left-[3.19rem] w-[2.19rem] h-[2.19rem] object-cover opacity-[0.5]" />
//         <BiShareAlt className="text-black absolute top-[0.13rem] left-[6.63rem] w-[2.19rem] h-[2.19rem] object-cover opacity-[0.5]" />
//         <BsFillBookmarkFill className="text-black absolute top-[0.13rem] left-[10.06rem] w-[2.19rem] h-[2.19rem] object-cover opacity-[0.5]" />
//         <div className="absolute top-[3.88rem] left-[0rem] w-[22.5rem] h-[3.44rem] text-white">
//           <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-crimson-100 w-[22.5rem] h-[3.44rem]" />
//           <div className="text-black absolute top-[0.81rem] left-[7.56rem] font-medium [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.2)]">
//             See Showtimes
//           </div>
//           <GiTicket className=" text-black absolute top-[0.88rem] left-[5.25rem] w-[1.81rem] h-[1.81rem] object-cover" />
//         </div>
//         <div className="text-black absolute top-[8.06rem] left-[0rem] w-[22.5rem] h-[3.44rem] text-darkslategray-200">
//           <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-crimson-200 box-border w-[22.5rem] h-[3.44rem] border-[1px] border-solid border-crimson-100" />
//           <BsListUl className=" text-black absolute top-[1.06rem] left-[3.94rem] w-[1.44rem] h-[1.44rem] object-cover" />
//           <div className="text-black absolute top-[0.81rem] left-[6.13rem] font-medium">
//             More watch options
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[43rem] left-[17.19rem] w-[49.07rem] h-[11.44rem] text-[1.25rem] text-darkslategray-200">
//         <div className="text-black absolute top-[1rem] left-[0.38rem]">
//           <span>Director :</span>
//           <span className="text-black">{` `}</span>
//           <span className="text-crimson-100 text-black">Joseph Kosinski</span>
//         </div>
//         <div className="absolute top-[4.81rem] left-[0.38rem] text-black">
//           <span>{`Writers :  `}</span>
//           <span className="text-crimson-100 text-black">
//             Jim Cash, Jack Epps Jr, Peter Craig
//           </span>
//         </div>
//         <div className="absolute top-[8.63rem] left-[0.38rem] text-black">
//           {/* <span>{Stars}</span> */}
//           <span className="text-crimson-100 text-black">
//             Tom Cruise, Jennifer Connelly, Miles Teller
//           </span>
//         </div>
//       </div>
//       <div className=" text-black absolute top-[55.38rem] left-[17.19rem] w-[49.07rem] h-[48.25rem] text-[0.94rem]">
//         <div className="absolute top-[0rem] left-[0rem] w-[49.06rem] h-[3.44rem] text-[1.25rem] text-white">
//           <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-gray-100 box-border w-[49.06rem] h-[3.44rem] border-[1px] border-solid border-silver" />
//           <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-red-800 w-[15.81rem] h-[3.44rem]" />
//           <div className="absolute top-[0.81rem] left-[1.25rem] font-medium">
//             Top rated movie #65
//           </div>
//           <div className="absolute top-[0.81rem] left-[17.31rem] font-medium text-darkslategray-200 text-black">
//             Awards 9 nominations
//           </div>
//           <IoIosArrowDropdown className="text-black absolute top-[0.81rem] left-[45.56rem] w-[1.88rem] h-[1.88rem] object-cover" />
//         </div>

//         <div className=" absolute top-[5.69rem] left-[0rem] text-[1.5rem] font-medium">
//           Top Cast
//         </div>
//         <div className="absolute top-[9.88rem] left-[0rem] w-[8.81rem] h-[14rem] text-center text-gainsboro-300">
//           <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-lightcyan w-[8.75rem] h-[8.75rem]" />
//         <Image
//             className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
//             alt="this an image"
//             src="/tom.jpg"
//             width={140}
//             height={140}
//           />
//           <div className="absolute top-[9.69rem] left-[0rem] font-medium">
//             <p className="m-0 text-gainsboro-100">Tom Cruise</p>
//             <p className="m-0">Capt. Pete Mitchell</p>
//             <p className="m-0">(Maverick)</p>
//           </div>
//         </div>
//         <div className="absolute top-[9.88rem] left-[12.94rem] w-[8.75rem] h-[12.56rem] text-center">
//           <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-ghostwhite w-[8.75rem] h-[8.75rem]" />
//           <Image
//             className="absolute top-[0rem] left-[0rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
//             alt="this is image"
//             src="/Jennifer.jpg"
//             width={140}
//             height={140}
//           />
//           <div className="text-black absolute top-[9.69rem] left-[0.13rem] font-medium">
//             <p className="m-0">Jennifer Connelly</p>
//             <p className="m-0 text-gainsboro-300">Penny Benjamin</p>
//           </div>
//         </div>
//         <div className="absolute top-[9.88rem] left-[25.38rem] w-[9.81rem] h-[14rem] text-center text-gainsboro-300">
//           <div className="absolute top-[0rem] left-[0.5rem] rounded-[50%] bg-aliceblue w-[8.75rem] h-[8.75rem]" />
//           <Image
//             className="absolute top-[0rem] left-[0.5rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
//             alt=""
//             src="/Miles.jpg"
//             width={140}
//             height={140}
//           />
//           <div className="absolute top-[9.69rem] left-[0rem] font-medium">
//             <p className="m-0 text-gainsboro-100">Miles Teller</p>
//             <p className="m-0">Lt. Bradley Bradshaw</p>
//             <p className="m-0">(Rooster)</p>
//           </div>
//         </div>
//         <div className="absolute top-[9.88rem] left-[38.38rem] w-[9.56rem] h-[14rem] text-center text-gainsboro-300">
//           <div className="absolute top-[0rem] left-[0.44rem] rounded-[50%] bg-darkgray w-[8.75rem] h-[8.75rem]" />
//           <Image
//             className="absolute top-[0rem] left-[0.44rem] rounded-[50%] w-[8.75rem] h-[8.75rem] object-cover"
//             alt="this in image"
//             src="/Val.jpg"
//             width={140}
//             height={140}
//           />
//           <div className="absolute top-[9.69rem] left-[0rem] font-medium">
//             <p className="m-0 text-gainsboro-100">Val Kilmer</p>
//             <p className="m-0">Adm. Tom Kazansky</p>
//             <p className="m-0">(Iceman)</p>
//           </div>
//         </div>
//         <div className="absolute top-[35.5rem] left-[0.38rem] text-[1.13rem]">
//           <p className="m-0">How expensive was Top Gun to</p>
//           <p className="m-0">make? In this episode of "By the</p>
//           <p className="m-0">Numbers," we break down all the</p>
//           <p className="m-0">statistics you need to know</p>
//           <p className="m-0">(and some you don't) of the</p>
//           <p className="m-0">original '80s classic 'Top Gun.'</p>
//         </div>
//         <div className="absolute top-[46.56rem] left-[0.38rem] text-[1.13rem] text-mediumturquoise">
//           Learn more
//         </div>
//       </div>
//       <div className="text-black absolute top-[106rem] left-[17.56rem] w-[48.69rem] h-[23.69rem] text-[0.75rem]">
//         <div className="absolute top-[0rem] left-[0rem] w-[48.72rem] h-[21rem]">
//           <div className="absolute top-[0rem] left-[0rem] text-[1.56rem] font-semibold">
//             Similar Movies
//           </div>
//           <div className="absolute top-[0.13rem] left-[45.56rem] text-[0.94rem] font-semibold text-dimgray">
//             See all
//           </div>
//           <Image
//             className="absolute top-[4.06rem] left-[0rem] rounded-xl w-[10.75rem] h-[16.94rem] object-cover"
//             alt=""
//             src="/Poster1.png"
//             width={172}
//             height={272}
//           />
//           <Image
//             className="absolute top-[4.06rem] left-[12.69rem] rounded-xl w-[10.69rem] h-[16.94rem] object-cover"
//             alt=""
//             src="/Poster2.png"
//             width={171}
//             height={272}

//           />
//           <Image
//             className="absolute top-[4.06rem] left-[25.75rem] rounded-xl w-[10.81rem] h-[16.94rem] object-cover"
//             alt=""
//             src="/Poster3.png"
//             width={173}
//             height={272}
//           />
//           <Image
//             className="absolute top-[4.06rem] left-[37.94rem] rounded-xl w-[10.75rem] h-[16.94rem] object-cover"
//             alt=""
//             src="/Poster4.png"
//             width={172}
//             height={272}
//           />
//           <div className="absolute top-[4.06rem] left-[7.13rem] w-[3.65rem] h-[1.51rem]">
//             <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray-300 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />

//             <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
//               6.9
//             </div>
//           </div>
//           <div className="absolute top-[4.06rem] left-[19.75rem] w-[3.65rem] h-[1.51rem]">
//             <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />

//             <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
//               7.9
//             </div>
//           </div>
//           <div className="absolute top-[4.06rem] left-[32.94rem] w-[3.65rem] h-[1.51rem]">
//             <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gray-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />

//             <Image
//               className="absolute top-[0.25rem] left-[0.63rem] w-[0.94rem] h-[0.94rem] object-cover"
//               alt=""
//               src="/star.png"
//               width={15}
//               height={15}
//             />
//             <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
//               8.3
//             </div>
//           </div>

//           <div className="absolute top-[4.06rem] left-[45.06rem] w-[3.65rem] h-[1.51rem]">
//             <div className="absolute top-[0rem] left-[0rem] rounded-tl-none rounded-tr-3xl rounded-br-none rounded-bl-3xl bg-gainsboro-400 [backdrop-filter:blur(5px)] w-[3.65rem] h-[1.51rem]" />

//             <div className="absolute top-[0.19rem] left-[1.81rem] font-medium inline-block w-[1.24rem] h-[1.29rem]">
//               7.0
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute top-[103.5rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
//         <Image
//           className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
//           alt="THis is image"
//           src="/RectangleSide.png"
//           width={360}
//           height={228}
//         />
//         <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
//         <BsListUl className="absolute top-[12.38rem] left-[1rem] w-[1.44rem] h-[1.44rem] object-cover" />
//         <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">{`New & Upcoming Sequels, Prequels`}</div>
//       </div>
//       <div className=" text-black absolute top-[87.13rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
//         <Image
//           className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
//           alt=""
//           src="/RectangleSide.png"
//           width={360}
//           height={228}
//         />
//         <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
//         <BsListUl className="absolute top-[12.38rem] left-[1rem] w-[1.44rem] h-[1.44rem] object-cover" />
//         <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
//           Top 50 TV Dramas
//         </div>
//       </div>
//       <div className="text-black absolute top-[78.81rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
//         <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
//         <div className="absolute top-[0.88rem] left-[0.94rem]">
//           <p className="m-0">Upcoming Action and</p>
//           <p className="m-0">Adventure Movies and TV</p>
//         </div>
//         <Image
//           className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
//           alt=""
//           src="/Poster1.png"
//           width={74}
//           height={83}
//         />
//         <div className="text-black absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
//           updated 3 months ago • 26 images
//         </div>
//       </div>
//       <div className="text-black absolute top-[119.88rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
//         <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
//         <div className="absolute top-[0.88rem] left-[0.94rem]">Favourite</div>
//         <Image
//           className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
//           alt=""
//           src="/Poster2.png"
//           width={74}
//           height={83}
//         />
//         <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
//           created 2 months ago • 48 images
//         </div>
//       </div>
//       <div className="text-black absolute top-[70.5rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
//         <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
//         <div className="absolute top-[0.88rem] left-[0.94rem]">
//           2022 Summer Movie Guide
//         </div>
//         <Image
//           className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
//           alt=""
//           src="/Poster3.png"
//           width={74}
//           height={83}
//         />
//         <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
//           updated 1 month ago • 52 images
//         </div>
//       </div>
//       <div className="text-black absolute top-[62.19rem] left-[67.56rem] w-[22.5rem] h-[6.25rem]">
//         <div className="absolute top-[0rem] left-[0rem] rounded-3xs shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[22.5rem] h-[6.25rem] border-[1px] border-solid border-gainsboro-500" />
//         <div className="absolute top-[0.88rem] left-[0.94rem]">
//           <p className="m-0">The Billion-Dollar Film Club: 50</p>
//           <p className="m-0">Movies to Reach $1 Billion Worldwide</p>
//         </div>
//         <Image
//           className="absolute top-[0.5rem] left-[17.19rem] rounded-3xs w-[4.63rem] h-[5.19rem] object-cover"
//           alt=""
//           src="/Poster4.png"
//           width={74}
//           height={83}
//         />
//         <div className="absolute top-[4.44rem] left-[0.94rem] text-[0.75rem] text-gainsboro-600">
//           updated 1 week ago • 50 images
//         </div>
//       </div>
//       <div className=" absolute top-[45.81rem] left-[67.56rem] w-[22.5rem] h-[14.31rem]">
//         <Image
//           className="absolute top-[0rem] left-[0rem] rounded-3xs w-[22.5rem] h-[14.31rem] object-cover"
//           alt=""
//           src="/RectangleSide.png"
//           width={360}
//           height={228}
//         />
//         <div className="absolute top-[11.69rem] left-[0rem] rounded-3xs bg-gray-500 [backdrop-filter:blur(4px)] w-[22.5rem] h-[2.63rem]" />
//         <BsListUl className="absolute top-[12.31rem] left-[0.88rem] w-[1.69rem] h-[1.69rem] object-cover" />
//         <div className="absolute top-[12.44rem] left-[3.19rem] font-medium [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.25)]">
//           The Best Movies and Shows in September
//         </div>
//       </div>

//       <div className="text-black absolute h-full w-[14.95%] top-[0%] right-[85.05%] bottom-[0%] left-[0%] text-[1.25rem] text-dimgray">
//         <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white border-2 rounded-r-3xl " />

//         <Link
//           href="/"
//           className="[text-decoration:none] absolute h-[5.09%] w-[82.3%] top-[5.3%] right-[8.85%] bottom-[89.61%] left-[8.85%] flex flex-row items-center justify-start gap-[1.5rem] text-[1.5rem] text-darkslategray-200 font-dm-sans"
//         >
//           <Image
//             className="relative w-[3.13rem] h-[3.13rem] object-cover"
//             alt="this is image"
//             src="/tv.png"
//             width={50}
//             height={50}
//           />
//           <b className="relative leading-[1.5rem] text-black">MovieBox</b>
//         </Link>

//         <Link href="/">
//           <div className=" absolute h-[3.05%] w-[44.69%] top-[21.08%] right-[36.73%] bottom-[75.87%] left-[18.58%]">
//             <div className="absolute h-full w-[60.4%] top-[0%] left-[39.6%] font-semibold inline-block">
//               Home
//             </div>
//             <FaHome className="absolute top-[0.06rem] left-[-0.12rem] w-[1.81rem] h-[1.81rem] object-cover" />
//           </div>
//         </Link>

//         <Link href="/">
//           <div className="absolute h-[8.76%] w-full top-[28.92%] right-[0%] bottom-[62.32%] left-[0%] text-crimson-100">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-200" />
//             <div className="absolute h-[34.88%] w-[31.86%] top-[32.56%] left-[36.28%] font-semibold inline-block">
//               Movies
//             </div>
//             <BiCameraMovie className="absolute top-[1.75rem] left-[2.63rem] w-[1.56rem] h-[1.56rem] object-cover" />
//           </div>
//         </Link>

//         <Link href="/">
//           <div className="absolute h-[8.76%] w-full top-[37.68%] right-[0%] bottom-[53.56%] left-[0%] text-crimson-100">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-200" />
//             <div className="absolute h-[34.88%] w-[31.86%] top-[32.56%] left-[36.28%] font-semibold inline-block">
//               TV Series
//             </div>
//             <BiCameraMovie className="absolute top-[1.75rem] left-[2.63rem] w-[1.56rem] h-[1.56rem] object-cover" />
//           </div>
//         </Link>
//         <Link href="/">
//           <div className="absolute h-[8.76%] w-full top-[55.2%] right-[0%] bottom-[36.04%] left-[0%] text-crimson-100">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-200" />
//             <div className="absolute h-[34.88%] w-[31.86%] top-[32.56%] left-[36.28%] font-semibold inline-block">
//               Upcoming
//             </div>
//             <CgCalendarDates className="absolute top-[1.75rem] left-[2.63rem] w-[1.56rem] h-[1.56rem] object-cover" />
//           </div>
//         </Link>

//         <div className="absolute h-[3.05%] w-[50.44%] top-[89.92%] right-[30.97%] bottom-[7.03%] left-[18.58%]">
//           <div className="absolute h-full w-[64.91%] top-[0%] left-[35.09%] font-semibold inline-block">
//             Logout
//           </div>
//           <IoLogOutOutline className="absolute top-[0.06rem] left-[-0.12rem] w-[1.81rem] h-[1.81rem] object-cover" />
//         </div>

//         <div className="absolute top-[38.19rem] left-[1.75rem] w-[10.63rem] h-[14.25rem] text-[0.75rem]">
//           <div className="absolute top-[1.09rem] left-[-0.03rem] rounded-xl bg-lavenderblush-200 box-border w-[10.69rem] h-[13.19rem] border-[1px] border-solid border-crimson-300" />
//           <div className="absolute top-[8.63rem] left-[0.94rem] font-medium">
//             <p className="m-0">50k people are playing</p>
//             <p className="m-0">now</p>
//           </div>
//           <div className="absolute top-[3.75rem] left-[1rem] text-[0.94rem] font-semibold text-darkslategray-300">
//             <p className="m-0">Play movie quizes</p>
//             <p className="m-0">and earn</p>
//             <p className="m-0">free tickets</p>
//           </div>
//           <div className="absolute top-[11.38rem] left-[1.81rem] rounded-[30px] bg-crimson-400 w-[7rem] h-[1.88rem]" />
//           <div className="absolute top-[11.75rem] left-[2.88rem] font-medium text-crimson-100">
//             Start playing
//           </div>
//           <div className="absolute top-[0rem] left-[4.19rem] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.25)] w-[2.19rem] h-[2.19rem]" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetail;
