import { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faRedo } from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../UI/SectionHeader";

const Video = () => {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState("stopped");

  const handlePlay = () => {
    videoRef.current.play();
    setVideoState("isPlaying");
  };

  const handleVideoEnd = () => {
    if (!videoRef.current) return;
    setVideoState("ended");
  };

  const handleVideoPause = () => {
    if (!videoRef.current) return;
    setVideoState("stopped");
  };

  return (
    <>
      <SectionHeader heading="Watch Our Memorable Trips" />
      <StyledVideoCt>
        <video
          controls
          ref={videoRef}
          onEnded={handleVideoEnd}
          onPause={handleVideoPause}
          onPlay={handlePlay}
        >
          <source
            src="https://videos.pexels.com/video-files/4125025/4125025-hd_1920_1080_24fps.mp4"
            type="video/mp4"
          />
        </video>
        {videoState !== "isPlaying" && (
          <button className="play-button" onClick={handlePlay}>
            <FontAwesomeIcon
              icon={videoState === "stopped" ? faPlay : faRedo}
              className="icon"
            />
          </button>
        )}
      </StyledVideoCt>
    </>
  );
};

const StyledVideoCt = styled.div`
  width: 100%;
  height: calc(100vw * 0.45);
  overflow: hidden;
  border-radius: 1rem;
  position: relative;
  background-color: #00000029;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
  }
  .play-button {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    background-color: transparent;
    border: none;
    transform: translate(-50%, -50%);
    .icon {
      font-size: 8rem;
      color: #ffffff;
    }
  }
  @media (min-width: 50em) {
    border-radius: 2rem;
    .play-button {
      .icon {
        font-size: 12rem;
      }
    }
  }
  @media (min-width: 90em) {
    border-radius: 4rem;
  }
`;

export default Video;
