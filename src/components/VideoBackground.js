import useFetchTrailer from "../hooks/useFetchTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ id, title }) => {
  useFetchTrailer(id);

  const trailer = useSelector((store) => store.movie?.trailer);

  if (!trailer) return;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video absolute"
        src={
          "https://www.youtube.com/embed/" +
          trailer.key +
          "?autoplay=1&controls=0&showinfo=0&modestbranding=1&autohide=1;"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
