import React from "react";
import { useParams } from "react-router-dom";

const MovieID = () => {
  const { id } = useParams();
  return <div>HI {id}</div>;
};

export default MovieID;
