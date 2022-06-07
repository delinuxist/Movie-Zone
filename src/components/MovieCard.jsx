import React from 'react'

const MovieCard = ({movie:{ imdbID, Year, Poster, Title, Type }}) => {
  return (
    <div className=" group ">
            
              <img width={250} className=' h-[23rem] rounded-2xl' src={Poster === "N/A" ? "https://via.placeholder.com/400" : Poster} alt="" />
           
              
            </div>
  )
}

export default MovieCard