import React, { useState, useRef } from "react";
import song from "./song.mp3";
import catMewing from "./mewing.png";

function App() {
  const audio = new Audio(song);
  audio.loop = true;

  const [isPlaying, setIsPlaying] = useState(false);
  const [showText, setShowText] = useState(true); // Agregamos un estado para controlar la visibilidad del texto

  const toggleAudio = () => {
    audio.loop = true;
    audio.play();
    setIsPlaying(true);
    setShowText(false); // Ocultamos el texto cuando se inicia la reproducción
  };

  return (
    <div className="App">
      {/* Usamos una expresión condicional para mostrar el texto o la imagen */}
      {showText ? (
        <h1>Haces Mewing</h1>
      ) : (
        <img src={catMewing} alt="Cat Mewing" />
      )}

      {/* Usamos una expresión condicional para mostrar el botón solo si no se está reproduciendo */}
      {!isPlaying && <button onClick={toggleAudio}>Si</button>}
    </div>
  );
}

export default App;
