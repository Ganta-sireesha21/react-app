import { useRef, useState } from "react";

function MultiVideoPlayer() {
  const videoRef = useRef(null);

  const [videos] = useState([
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4"
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const play = () => videoRef.current.play();
  const pause = () => videoRef.current.pause();
  const forward = () => (videoRef.current.currentTime += 5);
  const rewind = () => (videoRef.current.currentTime -= 5);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <h2>Multi Video Player</h2>

      <video
        ref={videoRef}
        width="400"
        src={videos[currentVideoIndex]}
      />

      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={forward}>Forward</button>
        <button onClick={rewind}>Rewind</button>
      </div>

      <div>
        <button onClick={prevVideo}>Previous</button>
        <button onClick={nextVideo}>Next</button>
      </div>
    </div>
  );
}

export default MultiVideoPlayer;
