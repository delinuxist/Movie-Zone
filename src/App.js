import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { SearchIcon } from "@heroicons/react/solid";
import MovieCard from "./components/MovieCard";

const key = process.env.REACT_APP_KEY;
const API_URL = `https://www.omdbapi.com?apikey=${key}`;

const App = () => {
  const [title, setTitle] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchMovies = async (title) => {
    const response = await axios.get(`${API_URL}&s=${title}`);
    setMovies(response.data.Search);
  };

  return (
    <div className="p-4 bg-[#212426] min-h-screen">
      <div className=" p-4 flex justify-center items-center flex-col">
        <h1 className=" text-3xl font-semibold bg-clip-text w-fit text-transparent tracking-wide bg-gradient-to-r from-[#f9d3b4] to-[#f9d3b400] ">
          MovieZone
        </h1>
        <div className="pb-5 w-full text-center relative ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              searchMovies(title);
            }}
          >
            <input
              type="text"
              placeholder="Search for movies"
              className=" py-2 px-4 bg-slate-600 m-5 rounded-3xl w-[71%] outline-none text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </form>
          <SearchIcon
            className=" w-6 absolute right-[17%] top-[1.8rem] text-orange-300 cursor-pointer"
            onClick={() => searchMovies(title)}
          />
        </div>
        <div className=" container ">
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
            {!movies ? (
              <h1 className=" text-white">No Movies Found</h1>
            ) : (
              movies.map((movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
