import React, { useEffect, useState } from "react";
import axios from "axios";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/token/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    },
  };

  useEffect(() => {
    // using axios
    // const data=axios
    //   .request(options)
    //   .then(res => console.log(res.data))
    //   .catch(err => console.error(err));

    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const data = await res.json();
    setMovieList(data.results);
    console.log(data);
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
