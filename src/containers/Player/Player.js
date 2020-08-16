import React, { useState, useRef } from "react";
import ReactPlayer from "react-player/lazy";

import "./Player.css";

const Player = (props) => {
  const playerRef = useRef(null);

  const [url, setUrl] = useState("https://www.youtube.com/watch?v=JGwWNGJdvx8");
  const [buttonEnable, setButtonEnable] = useState(false);
  const [durationValue, setDurationValue] = useState("0");
  const [newUrl, setNewUrl] = useState("");
  const playvideoHandler = (e) => {
    e.preventDefault();
    if (buttonEnable && newUrl !== url) {
      setUrl(newUrl);
    }
  };
  const inputChangeHandler = (e) => {
    //alert(e.target.value);
    if (e.target.value) {
      setButtonEnable(true);
      setNewUrl( e.target.value);
    } else {
      setButtonEnable(false);
    }
  };
  const durationChangeHandler = (e) => {
    setDurationValue(e.target.value);
    playerRef.current.seekTo(e.target.value)
  };

  return (
    <div className="Player">
      <div>
        <form className="Player-content-wrap">
          <input type="text" name="link" style={{width:"500px"}} onChange={inputChangeHandler} />
          <button disabled={!buttonEnable} onClick={(e) => playvideoHandler(e)}>
            Go!
          </button>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ReactPlayer style={{alignItems: "center"}} ref={playerRef} url={url} width={500} height={350} />
          <input
            type="range"
            min="0"
            max="1"
            value={durationValue}
            step="any"
            width={500}
            onChange={durationChangeHandler}
          />
        </div>

        <p> {url}</p>
      </div>
    </div>
  );
};

export default Player;
