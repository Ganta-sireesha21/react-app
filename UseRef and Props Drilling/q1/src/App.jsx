import VideoPlayer from "./VideoPlayer";
import MultiVideoPlayer from "./MultiVideoPlayer";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>useRef Video Player Demo</h1>

      <hr />

      {/* Part 1: Single Video using useRef */}
      <VideoPlayer />

      <hr />

      {/* Part 2: Multiple Videos using useState + useRef */}
      <MultiVideoPlayer />
    </div>
  );
}

export default App;
