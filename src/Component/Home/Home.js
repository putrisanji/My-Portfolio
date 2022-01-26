import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { DiHtml5,DiCss3,DiJavascript1,DiReact } from "react-icons/di";

import "./Home.css";

// import HtmlLogo from "../../Asset/Images/icons8-html-5.svg";
// import CssLogo from "../../Asset/Images/icons8-css3.svg";
// import JavaSriptLogo from "../../Asset/Images/icons8-javascript.svg";
// import ReactLogo from "../../Asset/Images/react.svg";

const tools = [
  {
    id: "1",
    tools: <DiHtml5 style={{height:"6rem", width:"6rem"}}/>,
  },
  {
    id: "2",
    tools: <DiCss3 style={{height:"6rem", width:"6rem"}}/>,
  },
  {
    id: "3",
    tools: <DiJavascript1 style={{height:"6rem", width:"6rem"}}/>,
  },
  {
    id: "4",
    tools: <DiReact style={{height:"6rem", width:"6rem"}}/>,
  },
];

function Home() {
  return (
    <div className="home">
      <div id="home" className="outer-home">
        <h1>Hi! I'am Putri</h1>
        <p>Newbe Frontend Developer</p>
        <div className="btn">
          <Button>Hire Me</Button>
        </div>
      </div>
      <div className="tools">
        {tools.map((item) => {
          return <div className="icon">{item.tools}</div>;
        })}
      </div>
    </div>
  );
}

export default Home;
