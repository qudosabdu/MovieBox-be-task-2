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
    <div className="bg-gray-300 p-10 flex flex-col h-screen rounded-r-[50px]">
      <div className="mb-6 mt-10">
        <img
          src="/logo.png"
          width={150}
          height={150}
          alt="Logo"
          className="text-black "
        />

        {/* Add your Logo component */}
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
        <Link href="/">
          <FaSignOutAlt className="text-black  mr-2 inline-block" />
          <span className="text-black ">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailSidebar;
