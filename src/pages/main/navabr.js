import Image from "next/image";
import Link from "next/link";
import { FaImdb } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import SearchComponent from "@/components/SearchComponent";
import SideMenu from "@/components/SideMenu";

const Navbar = () => {
  return (
    <div className="relative">
      <div className="relative w-full h-[300px] md:h-[600px]">
        <Image
          src="/Poster.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />

        <Link href="/">
          <div className="absolute top-4 left-10 ">
            <Image src="/Logo.png" width={150} height={150}  alt="Logo" />
          </div>
        </Link>

        <div className="hidden md:block">
          <SearchComponent />
        </div>

        <SideMenu />

        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-left max-w-[80%] mx-auto">
          <div className="flex flex-col items-center md:flex-row md:items-center mb-2 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl mb-2 md:mb-0 mr-2">
              John Wick: Chapter 4
            </h1>
            <div className="flex items-center ">
              <FaImdb className="" size={30} style={{ color: "#fbbf14" }} />
              <span className="text-sm md:text-base ml-1">86.0/100</span>
              <GiTomato className="ml-4" size={25} style={{ color: "red" }} />
              <span className="text-sm md:text-base ml-1">97%</span>
            </div>
          </div>
          <p className="text-sm md:text-base mb-4 max-w-[400px] mx-auto md:mx-0">
            American neo-noir action thriller film directed and co-produced by
            Chad Stahelski and written by Shay Hatten and Michael Finch
          </p>
          <button className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-red-700 flex items-center text-xl hover:scale-110 ease-in duration-300 font-medium mx-auto md:mx-0">
            {" "}
            <BsFillPlayCircleFill size={25} className="mr-1" />
            WATCH TRAILER
          </button>
        </div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-left max-w-[80%] mx-auto">
          <h1 className="text-2xl md:text-4xl mb-2 md:mb-0 mr-2">
            John Wick: Chapter 4
          </h1>
          <div className="flex justify-center items-center md:justify-start mb-2 flex-col md:flex-row">
            <div className="flex items-center mb-2 md:mb-0">
              <FaImdb className="" size={30} style={{ color: "#fbbf14" }} />
              <span className="text-sm md:text-base ml-1">86.0/100</span>
            </div>
            <div className="flex items-center">
              <GiTomato className="" size={25} style={{ color: "red" }} />
              <span className="text-sm md:text-base ml-1">97%</span>
            </div>
          </div>
          <p className="text-sm md:text-base mb-4 max-w-[400px] mx-auto md:mx-0">
            American neo-noir action thriller film directed and co-produced by
            Chad Stahelski and written by Shay Hatten and Michael Finch
          </p>
          <button className="bg-red-800 text-white px-1 md:px-3 py-1 rounded-full hover:bg-red-700 flex items-center text-sm md:text-xl hover:scale-110 ease-in duration-300 font-medium mx-auto md:mx-0 ">
            {" "}
            <BsFillPlayCircleFill size={20} className="mr-1" />
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
