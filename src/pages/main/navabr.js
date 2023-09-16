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
      <div className="relative w-full h-[200px] md:h-[600px]">
        <Image
          src="/Poster.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />

        {/* Logo */}
        <div className="absolute top-4 left-10">
          <Link href="/">
            <Image src="/logo.png" width={150} height={150} alt="Logo" />
          </Link>
        </div>

        <SearchComponent />
        <SideMenu />

        {/* Content */}
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-white text-center md:text-left">
          <div className="flex flex-col items-center md:flex-row md:items-center mb-2">
            <h1 className="text-2xl md:text-4xl mb-2 md:mb-0 mr-2">
              John Wick: Chapter 4
            </h1>
            <div className="flex items-center">
              <FaImdb className="" size={30} style={{ color: "#fbbf14" }} />
              <span className="text-sm md:text-base ml-1">86.0/100</span>
              <GiTomato className="ml-4" size={25} style={{ color: "red" }} />
              <span className="text-sm md:text-base ml-1">97%</span>
            </div>
          </div>
          <p className="text-sm md:text-base mb-4 max-w-[400px] whitespace-normal">
            American neo-noir action thriller film directed and co-produced by
            Chad Stahelski and written by Shay Hatten and Michael Finch
          </p>
          <button className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-red-700 flex items-center text-xl hover:scale-110 ease-in duration-300 font-medium">
            {" "}
            <BsFillPlayCircleFill size={25} className="mr-1" />
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
