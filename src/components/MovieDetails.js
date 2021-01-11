import React from 'react'


const MovieDetails = (props) => {
    return (
        <div className="containers">
            <div className="row col s12 goBack" onClick={props.closeMovieInfo}>
                <i className="fa fa-arrow-left"></i>
                <i className="tiny material-icons">arrow_back</i><span> Go Back </span>
            </div>
            <div className="row">
               <div className="col s12 m4 detailImg">
              {
                 props.currentMovie.poster_path == null ? <img src={`https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}  alt="movie card" style={{width: "100%", height: "360" }}/> 
                 : <img src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`} alt="movie card"/>
               }
               </div>
            <div className="col s12 m8 ">
                  <div className="info-container">
                    <p><b>Title:</b> {props.currentMovie.title}</p>
                    <p><b>Date:</b> {props.currentMovie.release_date}</p>
                    <p><b>Overview:</b> {props.currentMovie.overview}</p>
                  </div>
               </div>
            </div>    
        </div>
    )
}

export default MovieDetails;
