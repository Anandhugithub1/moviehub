import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
const Toprated =(props)=>{
const url ='https://api.themoviedb.org/3/movie/top_rated'
const apikey ='219f4ddb02421e6b686399b3758a96da'
const baseUrl = 'https://image.tmdb.org/t/p/w500';  // Base URL for the movie posters

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 200 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
const [data,Setdata] =useState([])
const apifetch =async()=>{

    try{
        const res = await axios.get(`${url}?api_key=${apikey}`)
        const movies = res.data.results.map(movie => ({
            ...movie,
            posterUrl: `${baseUrl}${movie.poster_path}`,  
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
        
        
        <div className="popular">
        <h2 className="fw-semibold fs-3 fw-bold text-white animate__animated animate__fade  animate__infinite">Popular <span>Movies</span> </h2>  
                <Carousel responsive={responsive}
                  swipeable={false}
                  draggable={false}
                  showDots={false}
                  ssr={true} // means to render carousel on server-side.
                  infinite={true}
                  autoPlay={props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={2000}
                  keyBoardControl={true}
                  customTransition="all .5"
                  transitionDuration={2000}
                  containerClass="carousel-container"
                  removeArrowOnDeviceType={["tablet", "mobile",'desktop']}
                  deviceType={props.deviceType}
                  dotListClass="custom-dot-list-style"
                  itemClass="carousel-item-padding-40-px"
                >
        {data.map((currelm,index)=>{
            return( 
               
              
                
                    <div className="grid animate__animated animate__fadeInLeft" key={index}>
                      <Link to={`movie/${currelm.id}`}>
                    
                    <img src={currelm.posterUrl} alt={`Poster for ${currelm.original_title}`} />
                    </Link>
            </div>
            )
        })}
         </Carousel>
        </div>
      

        </>
    )
}

export default Toprated;