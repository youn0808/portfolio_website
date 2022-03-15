import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  render() {
    return (
      <div>
        <h1>Hello this is new</h1>
      </div>
      // <div className="player-wrapper">
      //   <ReactPlayer
      //     url="ovie_app_demo.MP4"
      //     width="90%"
      //     height="90%"
      //     controls={true}
      //   />
      // </div>
    );
  }
}

export default Video;

// import React, { useEffect, useRef } from "react";

// const Video = () => {
//   const videoEl = useRef(null);

//   const attemptPlay = () => {
//     videoEl &&
//       videoEl.current &&
//       videoEl.current.play().catch((error) => {
//         console.error("Error attempting to play", error);
//       });
//   };

//   useEffect(() => {
//     attemptPlay();
//   }, []);

//   return (
//     <div>
//       <video
//         style={{ maxWidth: "97%" }}
//         playsInline
//         loop
//         muted
//         controls
//         alt="All the devices"
//         // src="/movie_app_demo.mp4"
//         src="/movie_app_demo.mp4"
//         ref={videoEl}
//       />
//     </div>
//   );
// };

// export default Video;
