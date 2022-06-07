import React from "react";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className=" group bg-black/100 rounded-2xl relative shadow-2xl drop-shadow-2xl hover:scale-105 duration-700 ease-in-out">
      <img
        width={250}
        className="group-hover:opacity-25 h-[23rem] rounded-2xl"
        src={Poster === "N/A" ? "https://via.placeholder.com/400" : Poster}
        alt=""
      />
      <div className=" absolute bg-[#212426] top-[18.1rem]  rounded-b-2xl  w-full group-hover:bg-transparent">
        <div className="px-4 py-4">
          <h1 className="  text-white font-extralight">{Type.toUpperCase()}</h1>
          <h1 className=" text-[#f9d3b4] text-justify truncate">{Title}</h1>
        </div>
      </div>
      <div className="absolute text-[#f9d3b4] font-thin invisible  top-1 p-2 group-hover:visible">
        <span>{Year}</span>
      </div>
    </div>
  );
};

export default MovieCard;
