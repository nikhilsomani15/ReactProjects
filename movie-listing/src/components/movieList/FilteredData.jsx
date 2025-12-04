import React from "react";

const FilteredData = ({ minRating, handleFilter, rating }) => {
  return (
    <ul className="align_center movie_filter">
      {rating.map((e) => {
        return (
          <li
            key={e}
            className={
              minRating === e ? "movie_filter_item active" : "movie_filter_item"
            }
            onClick={() => handleFilter(e)}
          >
            {e}+ Star
          </li>
        );
      })}
    </ul>
  );
};
export default FilteredData;
