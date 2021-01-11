import React from 'react'
import '../App.css'

const Movie = (props) => {
    return (
    <div className="gallery"> 
       <div className="col s12 movielist">
           <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
             {
                props.image == null ? <img src={`https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`}  alt="movie card" style={{width: "100%", height: "360" }}/> 
              : <img src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="movie card"/>
             }
           </div>
           <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">Title: {props.title}<i class="material-icons right">more_vert</i></span>
                  <span>Rate: {props.rate}</span>
                   <p>Date: {props.date}</p>
                   <div className="card-action">
                   <p><a href="#" onClick={()=>props.viewMovieDetails(props.movieId)}>View Details</a></p>
                 </div>
               </div>
           </div>
        </div>
     </div>  
    )
}


export default Movie;
