import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id, title }) => {
  useFetchTrailer(id);

  const trailer = useSelector((store) => store.movie?.trailer);

  if (!trailer) return;

  return (
    <div className="w-full overflow-x-hidden">
      <iframe
        className="w-full aspect-video absolute "
        src={
          "https://www.youtube.com/embed/" + trailer.key + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
