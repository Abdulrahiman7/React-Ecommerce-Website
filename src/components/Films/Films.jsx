import React, { useEffect, useState } from 'react'


const Films = () => {
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError]=useState(null);
    const [movies, setMovies]=useState([]);
    try{
        useEffect(async ()=>{
            const response=await fetch("https://swapi.py4e.com/api/films");
            response=await response.json();
            if(!response.ok)
            {
                throw new Error("invalid response");
            }
            setMovies(setMovies(response.results));
            setIsLoading(false);
        },[])
    }catch(err)
    {
        console.log(err);
    }
    let content;
    if(!error && !isLoading && movies.length > 0) {
        content=(<ul>
            {movies.map((movie) => <li key={episode_id}><Card>{movie}</Card></li>)}
        </ul>)
    }
    if(error && !isLoading) {
        content = <p>Something went wrong</p>
    }
    if(!isLoading && !error && movies.length === 0){
        content=<p>No items available</p>
    }
    
  return (
    <div>Films</div>
  )
}

export default Films