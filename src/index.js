import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'animate.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import { Pagenotfound } from './components/PageError/Pagenotfound';
import MovieDetail from './components/Details/MovieDetails';
import Seacrh from './components/Search/Seacrh';
const route =createBrowserRouter(createRoutesFromElements(
  <Route path='' element={<App/>} >
    <Route index element={<Home/>}/>
    <Route path='movie' element={<Movie/>}/>
    <Route path="movie/:id" element={<MovieDetail/>}></Route>
    <Route path='search' element={<Seacrh/>}></Route>

    <Route path='*' element={<Pagenotfound/>}/>
  </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
