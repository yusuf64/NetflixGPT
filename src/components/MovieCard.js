import React from "react";
import { IMG_URL } from "../utils/constant";

const MovieCard = ({ posterpath }) => {
  return (
    <div>
      <img src={IMG_URL + posterpath} />
    </div>
  );
};

export default MovieCard;
