import Image from "next/image";
import Link from "next/link";
import {
  FaHome,
  FaFilm,
  FaTv,
  FaArrowCircleUp,
  FaSignOutAlt,
} from "react-icons/fa";

const MovieDetailSidebar = () => {
  return (
    <div className="bg-white p-6 flex flex-col border-2 w-40 rounded-r-[50px] md:w-56 ">
      <div className="mb-10 mt-10 flex items-center space-x-2">
        <Image
          src="/tv.png"
          width={50}
          height={50}
          alt="Logo"
          className="text-black "
        />
        <span className="text-black font-medium">MovieBox</span>
      </div>
      <div>
        <div className="mb-6">
          <Link href="/">
            <FaHome className="text-black  mr-2 inline-block" />
            <span className="text-black ">Home</span>
          </Link>
        </div>
        <div className="mb-6">
          <Link href="/">
            <FaFilm className="text-black  mr-2 inline-block" />
            <span className="text-black ">Movie</span>
          </Link>
        </div>
        <div className="mb-6">
          <Link href="/">
            <FaTv className="text-black  mr-2 inline-block" />
            <span className="text-black ">TV Series</span>
          </Link>
        </div>
        <div className="mb-6">
          <Link href="/">
            <FaArrowCircleUp className="text-black  mr-2 inline-block" />
            <span className="text-black ">Upcoming</span>
          </Link>
        </div>

        <div className=" bg-[#fcf5f7] mb-6 w-16 md:w-40 h-52 border-2 rounded-2xl p-10 flex items-center">
          <Link href="/">
            <p className="text-black font-medium text-sm text-center">Play movie quizes and earn free tickets</p>
            <span className="text-black text-xs text-center">50k people are playing now</span>
            <button className="bg-[#f0c8d2] text-[#BE123C] px-4 py-2 rounded-3xl hover:bg-red-300 flex items-center font-medium text-xs hover:scale-110 ease-in duration-300 mx-auto md:mx-0 mt-4">
              {" "}
              <FaArrowCircleUp size={25} className="mr-1" />
              Play Now
            </button>

          </Link>
        </div>



        <Link href="/">
          <FaSignOutAlt className="text-black  mr-2 inline-block" />
          <span className="text-black ">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailSidebar;
