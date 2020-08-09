import React from "react";

import Player from "./Player";
import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <header className="App-header">
          <h3>Welcome to Video Player!!</h3>
        </header>
        <Player />
      </div>

      <Footer/>
    </div>
  );
}

export default App;
