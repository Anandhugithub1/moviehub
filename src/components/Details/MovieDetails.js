import React, {useEffect, useState} from "react"
import "./Moviedetails.css"
import Skeleton from "react-loading-skeleton"
import { useParams } from "react-router-dom"
import axios from "axios"
const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getData()
    })
  
  
    const apikey='219f4ddb02421e6b686399b3758a96da'
    const getData = async () => {
        try {

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`);
            const data = response.data;
            setMovie(data);
        } catch (error) {
            console.error('Error fetching movie details:', error);
        }
    };
    useEffect(() => {
        getData();
    }, ); 


    return (
        <div className="movie">
        {!currentMovieDetail ? (
            <div className="skeleton">
                {/* Skeleton for movie intro */}
                <div className="movie__intro">
                    <Skeleton height={400} width={'100%'} />
                </div>

                {/* Skeleton for movie detail */}
                <div className="movie__detail">
                    <div className="movie__detailLeft">
                        <div className="movie__posterBox">
                            <Skeleton height={400} width={300} />
                        </div>
                    </div>
                    <div className="movie__detailRight">
                        <div className="movie__detailRightTop">
                            <Skeleton height={20} width={'80%'} />
                            <Skeleton height={15} width={'60%'} />
                            <Skeleton height={15} width={'40%'} />
                            <Skeleton height={15} width={'30%'} />
                            <Skeleton height={15} width={'50%'} />
                        </div>
                        <div className="movie__detailRightBottom">
                            <div className="synopsisText">Synopsis</div>
                            <Skeleton count={3} />
                        </div>
                    </div>
                </div>

                {/* Skeleton for footer */}
                <div className="footer_class">
                    <Skeleton count={2} />
                </div>

                {/* Skeleton for production companies */}
                <div className="movie__heading second_heading">Production companies</div>
                <div className="movie__production">
                    <Skeleton width={150} height={50} count={5} />
                </div>
            </div>
        ) : (
            <>
              <div className="movie" >
            <div className="movie__intro">
                <img src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt=""  height='400px' width='100%' />

            </div>
            <div className="movie__detail" key={currentMovieDetail.id}>
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster"alt="" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop" key={currentMovieDetail.id}>
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating" >
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i className="fas fa-star" />
                            <span className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres" key={currentMovieDetail.id}>
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" key={genre.id} id={genre.id}>{genre.name}  </span></>
                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="footer_class">
            <div className="movie__links">
                <div className="movie__heading text-start">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <a href={currentMovieDetail.homepage} target="" style={{textDecoration: "none"}}><p><span className="btn btn-succes  movie__Button link-success  link-underline-opacity-100-hover fa-brands fa-imdb">Homepage <i className="newTab fas fa-external-link-alt "></i></span></p></a>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="" style={{textDecoration: "none"}}><p>
                        <span className="btn btn-succes  link-success  link-underline-opacity-25 link-underline-opacity-100-hover">IMDb<i className="newTab fas fa-external-link-alt"></i></span>
                        </p></a>
                }
            </div>
            </div>
            <div className="movie__heading second_heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage" key={company.id}>
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
            </>
        )}
    </div>


);


    
    
        
             
    
}

export default MovieDetail