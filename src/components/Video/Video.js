import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <video
        style={{ maxWidth: "97%" }}
        playsInline
        loop
        muted
        controls
        alt="All the devices"
        src="/movie_app_demo.mp4"
        ref={videoEl}
      />
    </div>
  );
};

export default Video;
