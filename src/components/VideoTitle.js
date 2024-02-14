import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  // console.log("Id from videotitle ", id, title);
  return (
    <div className="overflow-hidden py-52 px-14 video-wrapper absolute z-20 bg-gradient-to-r from-black w-full aspect-video">
      <div className="movie-info text-white ">
        <h1 className="text-6xl font-bold mb-10">{title}</h1>
        <p className="w-1/4 text-xl">{overview}</p>
      </div>
      <div className="movie-cta">
        <button className="border-[1px] bg-red-600 text-white font-bold text-lg rounded-md px-16 py-4 mr-6 my-10 hover:opacity-40 transition-all duration-300">
          Play Now
        </button>
        <button className="border-[1px] bg-slate-400 px-16 py-4 mr-6 my-10 rounded-md font-bold text-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
