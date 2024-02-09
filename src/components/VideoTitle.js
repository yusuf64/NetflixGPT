import React from "react";

const VideoTitle = ({ title, overview, id }) => {
  console.log("Id from videotitle ", id, title);
  return (
    <div className="py-40 px-14 video-wrapper absolute z-20">
      <div className="movie-info ">
        <h1 className="text-6xl font-bold mb-10">{title}</h1>
        <p className="w-2/4 text-2xl">{overview}</p>
      </div>
      <div className="movie-cta">
        <button className="border-[1px] bg-red-600 text-white font-bold text-lg rounded-md px-16 py-4 mr-6 my-10">
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
