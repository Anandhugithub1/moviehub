import React from "react";
import MovieList from "../Moviecarousel/movielist";
import Footer from "./Footer";
import './Home.css' 

// import Banners from "../Banners/Banner";
// import Banners from "../Banner/Banners";
import Banner from "../Banner/Banner";
import Navs from "./Nav";
import Toprated from "../PopularMovies/Toprated";
import Upcoming from "../Upcoming/Upcoming";
const Home =()=>{
    return (
        <>
        <header><Navs/></header>
        <Banner/>
        <Toprated/>
        <MovieList/>
        <Upcoming/>
        <footer>
         <Footer/>  
        </footer>
        </>
    )
}
export default Home