import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './Movielisted.css';
import Nav from "../Home/Nav";
import { Link } from "react-router-dom";

const Movie = (props) => {
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const apikey = '219f4ddb02421e6b686399b3758a96da';
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  const [loading, setLoading] = useState(true);
  const [data, Setdata] = useState([]);
  const [sortBy, setSortBy] = useState('popularity.desc');

  const sortingOptions = [
    { value: 'popularity.desc', label: 'Popularity' },
    { value: 'vote_count.desc', label: 'Top Rated' },
    { value: 'revenue.desc', label: 'revenue' },
  ];

  const apifetch = async () => {
    try {
      const res = await axios.get(`${url}?api_key=${apikey}&sort_by=${sortBy}`);
      const movies = res.data.results.map(movie => ({
        ...movie,
        posterUrl: `${baseUrl}${movie.poster_path}`,
      }));
      Setdata(movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    apifetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, apikey, sortBy]);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <>
      <Nav />
      <h2 className="text-center">Movies</h2>

      {/* Sorting dropdown */}
      <div className="sorting-dropdown">
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          {sortingOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <div className="grids">
          {loading ? (
            // Skeleton loading while data is being fetched
            Array.from({ length: 10 }).map((_, index) => (

              <Card key={index} style={{ width: '18rem' ,height:'300px'}} >
                <Skeleton height={500} width={180} />
                <Card.Body>
                  <Skeleton height={500} width={150} />
                  <Skeleton height={60} count={4} />
                </Card.Body>
              </Card>
            ))
          ) : (
            // Actual content when data is available
            data.map((currelm, index) => (
              <Card style={{ width: '18rem' }} key={index}>
                <Link to={`/movie/${currelm.id}`}>
                  <Card.Img variant="top" src={currelm.posterUrl} alt={`Poster for ${currelm.original_title}`} />
                  
                </Link>
                <Card.Body>
                  <Card.Title>{currelm.original_title}</Card.Title>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
      </SkeletonTheme>
    </>
  );
}

export default Movie;
