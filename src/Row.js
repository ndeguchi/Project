
import React, { useState, useEffect } from 'react';
import axios from './axios';

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl}){
     const [movies, setMovies] = useState([]);

     useEffect(() => {
          //if [], runs only one time when the row loads. 
          async function fetchData(){
               const request = await axios.get(fetchUrl);
               setMovies(request.data.results);
               return  request;
          }
          fetchData();

     }, [fetchUrl]);

     console.log(movies);

     return (
          <div className="row">
               <h2>{title}</h2>
               
               <div className="row_posters">
                    {/*row-posters */}

                    {movies.map(movie => (
                         <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name}/>
                    ))};

               </div>
               
          </div>
     )
}

export default Row;