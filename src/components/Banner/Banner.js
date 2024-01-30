import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import './Banner.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
const Banner =(props)=>{
const url ='https://api.themoviedb.org/3/trending/movie/day'
const apikey ='219f4ddb02421e6b686399b3758a96da'
const baseUrl = 'https://image.tmdb.org/t/p/w500'; 

const [data,Setdata] =useState([])
const apifetch =async()=>{

    try{
        const res = await axios.get(`${url}?api_key=${apikey}`)
        const movies = res.data.results.map(movie => ({
            ...movie,
            posterUrl: `${baseUrl}${movie.backdrop_path}`,  
        }));

        const apires =res.data.results
        // Setdata(apires)
        Setdata(movies);
            console.log(movies);
        console.log(apires)



    }
    catch(error){
        console.log(error)

    }
}
useEffect(()=>{
apifetch()
},[url,apikey,])
    return (
        <>
<div className="banner">

<Carousel  style={{ height: '400px' }} indicators={false} controls={false}>

{data.map((currelm,index)=>{
    return( 
       
       
<Carousel.Item interval={1000}  key={index}>
    <Link to={`movie/${currelm.id}`}>
<img src={currelm.posterUrl} alt={`Poster for ${currelm.original_title}`} height='400px' width='100%' style={{}}/>
</Link>

<Carousel.Caption>
  <h3>{currelm.original_title}</h3>
  {/* <p>{currelm.overview}</p> */}
 
</Carousel.Caption>
</Carousel.Item>

 
    )
})}    


 </Carousel>
</div>


        </>
    )

}
export const BASE_URL = "https://api.themoviedb.org/3";


export default Banner