import React,{useState} from 'react';
import ReactPlayer from 'react-player/lazy'

import './Player.css'

const Player = props => {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=-B_BXrl9iv4");
  const [buttonEnable, setButtonEnable]= useState(false);
  let newUrl = "";
  const playvideoHandler = e => {
    e.preventDefault();
    if (buttonEnable && newUrl !== url) {
      setUrl(newUrl);
    }
  };
  const inputChangeHandler = e => {
    //alert(e.target.value);
    if(e.target.value){
        setButtonEnable(true)
    newUrl = e.target.value;
    }
    else{
        setButtonEnable(false)
    }

  };

  return (
    <div className='Player'>
    <div >
      <form className='Player-content-wrap'>
        <input type="text" name="link" onChange={inputChangeHandler} />
        <button disabled={!buttonEnable} onClick={e => playvideoHandler(e)}>Go!</button>
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url={url} width={500} height={350} />
      </div>

      <p> {url}</p>
      </div>
    </div>
  );
};

export default Player;
