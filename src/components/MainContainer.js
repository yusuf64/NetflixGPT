import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { randnumber } from "../utils/constant";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlaying);

  if (!movies) return;

  const nowPlaying = movies.results[randnumber];

  const { original_title, overview, id } = nowPlaying;

  return (
    <div className="overflow-hidden">
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground id={id} title={original_title} />
    </div>
  );
};

export default MainContainer;
