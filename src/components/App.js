import React, { Component } from 'react'
import Nav from './Nav'
import SearchTerm from './SearchTerm'
import MovieList from './MovieList'
import Pagination from './Pagination'
import MovieDetails from './MovieDetails'
import '../App.css'

 class App extends Component {
   // intial state
   constructor(){
     super()
     this.state={
       movies:[],
       serachTerm:'',
       totalResults: 0,
       currentPage:1,
       currrentMovie:null
     }

     // APi Key generation
     this.APIKey =process.env.REACT_APP_APIKEY
   }
// search on submit and on change functions
   onHandleSubmit=(e)=>{
    e.preventDefault();
     fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.APIKey}&query=${this.state.searchTerm}`)
     .then(data => data.json())
     .then(data =>{
       this.setState({movies: [...data.results], totalResults: data.total_results})
       console.log(data)
     })
   }

   onHandleChange=(e)=>{
     this.setState({searchTerm: e.target.value})
     console.log(e.target.value);
   }
// pagination function
nextPage =(pageNumber)=>{
  fetch(`https://api.themoviedb.org/3/search/multi?api_key=${this.APIKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
  .then(data => data.json())
  .then(data =>{
    this.setState({movies: [...data.results], currentPage: pageNumber} )
    console.log(data)
  })
}
// Movie detail page function
viewMovieDetails =(id)=>{
  const filteredMovie =this.state.movies.filter(movie =>movie.id === id )
  const newCurrentMovie =filteredMovie.length> 0 ? filteredMovie[0] : null
  this.setState({currentMovie: newCurrentMovie})

}

closeMovieInfo= ()=>{
  this.setState({currentMovie : null })
}

  render() {

    const numberPages = Math.floor(this.state.totalResults/20)
    return (
      <div>
         <div className="App">
        <Nav />
        { 
        this.state.currentMovie== null ? 
        <div>
        <SearchTerm
         onHandleSubmit={this.onHandleSubmit}
         onHandleChange={this.onHandleChange}/>
         <MovieList  viewMovieDetails={this.viewMovieDetails} movies={this.state.movies} />
         </div> : 
         <MovieDetails currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />
         }

         { this.state.totalResults > 8 ? 
         <Pagination pages={numberPages} 
         nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''
         }
        </div>

      </div>
    )
  }
}


export default App;


