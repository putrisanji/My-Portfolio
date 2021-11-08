import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import "./Home.css";
import HtmlLogo from "../../Asset/Images/icons8-html-5.svg";
import CssLogo from "../../Asset/Images/icons8-css3.svg";
import JavaSriptLogo from "../../Asset/Images/icons8-javascript.svg";
import ReactLogo from "../../Asset/Images/react.svg";

const tools = [
  {
    id: "1",
    tools: HtmlLogo,
  },
  {
    id: "2",
    tools: CssLogo,
  },
  {
    id: "3",
    tools: JavaSriptLogo,
  },
  {
    id: "4",
    tools: ReactLogo,
  },
];

function Home() {
  return (
    <>
      <div id="home" className="outer-home">
        <div className="inner-home">
          <h1>Hi! I'am Putri</h1>
          <p>Newbe Frontend Engineer</p>
          <div className="btn">
            <Button>Hire Me</Button>
          </div>
        </div>
      </div>
      <Row
        className="tools"
        style={{bottom: "0px", backgroundColor: "#c2e0ff" }}
      >
        <Col>
          {tools.map((item) => {
            return (
              <img src={item.tools} style={{ width: "8rem", height: "8rem" }} />
            );
          })}
        </Col>
      </Row>
    </>
  );
}

export default Home;
