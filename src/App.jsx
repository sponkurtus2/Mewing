import React, { useState } from "react";
import strongImage from "./strong.jpeg";
import weakImage from "./weak.jpeg";
import song from "./song.mp3";

function App() {
  const [showImage, setShowImage] = useState(false);
  const [message, setMessage] = useState("");

  const handleYesClick = () => {
    setShowImage(true);
    setMessage("Comenzo para ti");
    playAudio();
  };

  const handleNoClick = () => {
    setShowImage(true);
    setMessage("Todo termino para ti");
    playAudio();
  };

  const playAudio = () => {
    const audio = new Audio(song);
    audio.loop = true;
    audio.play();
  };

  return (
    <div className="App">
      {showImage ? (
        <div>
          <img
            src={message === "Comenzo para ti" ? strongImage : weakImage}
            alt="Result"
          />
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <h1>¿Empezó para ti?</h1>
          <button onClick={handleYesClick}>Sí</button>
          <button onClick={handleNoClick}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;
