import React from "react";

import "./QuantityInput.css";

const QuantityInput = ({ setCounts, counts, stock }) => {
  return (
    <>
      <button
        className="quantity_input_button"
        onClick={() => setCounts((counts) => counts - 1)}
        disabled={counts >= 1 ? false : true}
      >
        {" "}
        -{" "}
      </button>
      <p className="quantity_input_count">{counts}</p>
      <button
        className="quantity_input_button"
        onClick={() => setCounts((counts) => counts + 1)}
        disabled={counts >= stock}
      >
        {" "}
        +{" "}
      </button>
    </>
  );
};

export default QuantityInput;
