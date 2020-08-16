import React from "react";

import Player from "./containers/Player/Player";
import "./App.css";

import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout className="content-wrap">
        <Player />
      </Layout>
    </div>
  );
}

export default App;
