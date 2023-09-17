
import Navbar from "./main/navabr";
import MovieList from "../components/MovieList";
import SearchComponent from "@/components/SearchComponent";
import Footer from "@/components/Footer";
import TopRated from "@/components/TopRated";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* <TopRated /> */}
      <MovieList />
      {/* <SearchComponent /> */}
      <Footer />
    </div>
  );
}
