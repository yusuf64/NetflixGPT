import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlaying);

  if (!movies) return;

  const nowPlaying = movies.results[Math.floor(Math.random() * 19) + 1];

  const { original_title, overview, id } = nowPlaying;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} id={id} />
      <VideoBackground id={id} title={original_title} />
    </div>
  );
};

export default MainContainer;
