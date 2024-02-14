import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useFetchTrailer = (id) => {

    const dispatch = useDispatch();

    const Teaser = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const results = json.results;

      const trailer = results.filter((e) => e.type === "Trailer");

      const finalt = trailer.length ? trailer[0] : results[0];

      dispatch(addTrailer(finalt));

      // console.log(finalt);

      // console.log("dd", dd[0].key);

      // const aa = dd[0].key;
    };

    useEffect(() => {
      Teaser();
    }, []);
}

export default useFetchTrailer
