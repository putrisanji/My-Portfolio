import React from "react";
import { Button } from "react-bootstrap";

import Navbar from "../../Component/Navbar";
import "./Home.css";

function Home() {
  return (
    <div className="outer-home">
        <Navbar />
      <div className="inner-home">
          <h1>Putri S. Dewi</h1>
          <hr></hr>
          <p>Pulau Buru, Maluku</p>
      </div>
    </div>
  );
}

export default Home;
