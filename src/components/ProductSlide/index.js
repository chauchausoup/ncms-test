import React from "react";
// videos and pngs
import gitPng from "../../assets/images/gh-mobile.png";
import gitVideo from "../../assets/videos/gh-mobile.h264.mp4";

import zchainLooper from "../../assets/videos/0chain_looper.mp4";
import elephantsVid from "../../assets/videos/elephants-dream.webm";
import sampleVideo from "../../assets/videos/github-2.mp4";

export default function ProductSlide() {
  return (
    <div>
      <div className="grid grid-cols-2 h-100vh bg-gray-900">
        <div className="grid justify-center items-center text-white text-5xl">
          {" "}
          Something 1
        </div>
        <div className="grid justify-center items-center p-20">
          <video
            autoPlay
            loop
            muted
            poster={gitPng}
            src={gitVideo}
            width={400}
            height={800}
            type="video/mp4"
          ></video>
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center p-20">
          {" "}
          <video
            autoPlay
            loop
            muted
            src={zchainLooper}
            className="h-screen w-screen"
            type="video/mp4"
          ></video>
        </div>
        <div className="grid justify-center items-center  text-5xl">
          Something 2
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh bg-gray-900">
        <div className="grid justify-center items-center  text-white text-5xl">
          {" "}
          Something 1
        </div>
        <div className="grid justify-center items-center  p-20">
          <video
            autoPlay
            loop
            muted
            src={sampleVideo}
            className="h-screen w-screen"
            type="video/mp4"
          ></video>
        </div>
      </div>
      <div className="grid grid-cols-2 h-100vh">
        <div className="grid justify-center items-center  p-20">
          <video
            autoPlay
            loop
            muted
            src={elephantsVid}
            width={800}
            height={600}
            type="video/webm"
          ></video>
        </div>
        <div className="grid justify-center items-center   text-5xl">
          Something 2
        </div>
      </div>
    </div>
  );
}
