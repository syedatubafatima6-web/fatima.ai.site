import { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const generateVideo = () => {
    setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4");
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>AI Video Generator</h1>

      <textarea
        placeholder="Enter AI video prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{
          width: "100%",
          height: 120,
          marginTop: 10
        }}
      />

      <button
        onClick={generateVideo}
        style={{
          marginTop: 10,
          padding: 10,
          width: "100%"
        }}
      >
        Generate Video
      </button>

      {videoUrl && (
        <video
          width="100%"
          controls
          style={{ marginTop: 20 }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
      }
