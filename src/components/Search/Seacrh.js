import React, { useEffect, useState ,} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Navs from '../Home/Nav';
import './Search.css'
const Search = () => {
  const url ='https://image.tmdb.org/t/p/w500'

  const apikey = '219f4ddb02421e6b686399b3758a96da';
  const baseUrl = 'https://api.themoviedb.org/3/search/movie?';
  const [search, setSearch] = useState('');
  const [data, Setdata] = useState([]);

  const apifetch = async () => {
  

    try{
        const res = await axios.get(`${baseUrl}query=${search}&api_key=${apikey}`)
        const movies = res.data.results.map(movie => ({
            ...movie,
            posterUrl: `${url}${movie.poster_path}`,  
        }));

        const apires =res.data.results
        // Setdata(apires)
        Setdata(movies);
            console.log(movies);
        console.log(apires)
        console.log(res)



    }
    catch(error){
        console.log(error)

    }
  };

  const eventHandle = (e) => {
 
    setSearch(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    apifetch();
  };
  useEffect(() => {
    apifetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
    <Navs/>
    <div className='body'>
    <div className='inputs'>
        <form action='' onSubmit={handleSearch} >
        <InputGroup className="mb-3 vh-30 ">
        <FormControl
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="basic-addon2"
          className="rounded-start"
       onChange={eventHandle} />

<Button
              variant="outline-secondary"
              id="button-addon2"
              className="rounded-end"  
            >
              Search
            </Button>

      </InputGroup>
        </form>
 

    </div>
   <div className="row mt-5 result">
    {data.map((currelm, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-6 seacrh-col res" key={index}>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3 mt-4">
                        <Link to={`/movie/${currelm.id}`}>
                            <img src={currelm.posterUrl} alt={`Poster for ${currelm.original_title}`} />
                        </Link>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 mt-4">
                        <h5>{currelm.original_title}</h5>
                    </div>
                </div>
            </div>
        )
    })}
</div>


   </div>
    </>
  );
};

export default Search;
