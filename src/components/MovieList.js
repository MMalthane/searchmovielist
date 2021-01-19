import React from 'react'
import Movie from './Movie'

 const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                           return(
                               <Movie key={i} viewMovieDetails={props.viewMovieDetails} movieId={movie.id} image={movie.poster_path} title={movie.title} rate={movie.vote_average} date={movie.release_date} />
                                )
                        })
                    }
                </div>
            </div>
            
        </div>
    )
}

export default MovieList;
