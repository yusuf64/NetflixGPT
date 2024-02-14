import React from "react";
import { IMG_URL } from "../utils/constant";

const MovieCard = ({ posterpath, alttext }) => {
  // console.log("coming from movie card", posterpath, altext);
  return (
    <div className="w-full px-3 rounded-md">
      <img className="rounded-sm" alt={alttext} src={IMG_URL + posterpath} />
    </div>
  );
};

export default MovieCard;
