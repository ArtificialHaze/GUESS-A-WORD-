import React, { useEffect } from "react";
import { checkWin } from "./utils";

const Popup = ({
  correctLetters,
  wrongLetters,
  setPlayable,
  selectedWord,
  playAgain,
}) => {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "Won") {
    finalMessage = "Congratulations, you have won!";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "Lost") {
    finalMessage = "Oops, you have lost.";
    finalMessageRevealWord = `Word was ${selectedWord}`;
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;
