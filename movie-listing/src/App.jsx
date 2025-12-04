import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Route, Routes } from "react-router-dom";
import MovieID from "./components/movieList/MovieID";
function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<MovieList type="popular" title="Popular" emoji={Fire} />}
        />
        <Route
          path="/toprated"
          element={
            <MovieList type="top_rated" title="Top Rated" emoji={Star} />
          }
        />
        <Route
          path="/upcoming"
          element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
        />
        <Route path="/movie/:id" element={<MovieID />} />
      </Routes>
    </div>
  );
}

export default App;
