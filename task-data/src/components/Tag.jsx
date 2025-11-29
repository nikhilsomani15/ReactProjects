import React from "react";

const Tag = ({ tagName }) => {
  return (
    <button type="button" className="tag">
      {tagName}
    </button>
  );
};

export default Tag;