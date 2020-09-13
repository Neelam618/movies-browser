import React, { useEffect } from "react";
import MovieCard from "./MovieCard.js";

function MoviesRow (props) {
    const { movies, movieIds } = props;
    return (
        <div className="movies_row columns">
            {movieIds.map((movieId, index) => {
                return (
                    <MovieCard movie={movies[movieId]} key={index} />
                )
            })}
       </div> 
    )
}

export default MoviesRow;
