import React, {useRef, useEffect} from 'react'
import '../App.css'

const SearchTerm = (props) => {
    const refContainer = useRef(null);
    useEffect(()=>refContainer.current.focus())
    
    return (
        <div className="container">
            <div className="row">
                <section className="col s10 offset-4"> 
                <form onSubmit={props.onHandleSubmit} >
                    <input onChange={props.onHandleChange} ref={refContainer} placeholder="Search Movies, Tv Shows, Actors" text="text"/>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Search
                            <i className="material-icons right">send</i>
                    </button>
                </form>
                </section>
            </div>    
        </div>
    )
}

export default SearchTerm;
