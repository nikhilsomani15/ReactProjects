import React, { useEffect, useState } from "react";
import axios from "axios";
import lodash from "lodash";

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import FilteredData from "./FilteredData";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [filteredList, setFilteredList] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/token/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
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
  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovie = lodash.orderBy(filteredList, [sort.by], [sort.order]);
      setFilteredList(sortedMovie);
    }
  }, [sort]);
  const fetchMovieData = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const data = await res.json();
    setMovieList(data.results);
    setFilteredList(data.results);
  };

  const handleFilter = (rating) => {
    if (minRating === rating) {
      setMinRating(0);
      setFilteredList(movieList);
    } else {
      setMinRating(rating);
      const filteredMovie = movieList.filter(
        (elem) => elem.vote_average >= rating
      );
      setFilteredList(filteredMovie);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSort((p) => ({ ...p, [name]: value }));
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs">
          <FilteredData
            minRating={minRating}
            rating={[6, 7, 8]}
            handleFilter={handleFilter}
          />

          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie_sorting"
            value={sort.order}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
