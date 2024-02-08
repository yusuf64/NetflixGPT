import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlaying);
  console.log(movies);

  return (
    <div>
      <VideoBackground />
      <VideoTitle />
    </div>
  );
};

export default MainContainer;
