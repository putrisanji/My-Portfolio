import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

import "./Portfolio.css";

const Data = [
  {
    id: "1",
    image:
      "https://asset.kompas.com/crops/JYEA-DAQ7T5po68HssUxdS1YXSw=/106x0:1071x643/750x500/data/photo/2021/07/04/60e1d6599f6e7.png",
    title: "my Porto",
    text: "Coba-coba",
    git: "#",
    web: "#",
  },
  {
    id: "1",
    image:
      "https://d1bpj0tv6vfxyp.cloudfront.net/articles/314611_4-11-2020_13-9-40.webp",
    title: "my Porto",
    text: "Coba-coba",
    git: "#",
    web: "#",
  },
  {
    id: "1",
    image:
      "https://cdn1.katadata.co.id/media/images/thumb/2021/09/15/Shiba_Inu-2021_09_15-11_07_53_9c277d9ea6b59443f00933c51e935562_620x413_thumb.jpg",
    title: "my Porto",
    text: "Coba-coba",
    git: "#",
    web: "#",
  },
];

function Portfolio() {
  return (
    <div className="outer-portfolio">
      {Data.map((card) => {
        return (
          <Card style={{ width: "18rem", backgroundColor: "#0F083D" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title style={{color: "white"}}>{card.title}</Card.Title>
              <Card.Text style={{color: "white"}}>{card.text}</Card.Text>
              <Row>
                <Col>
                  <Button variant="primary" href={card.git}>
                    Github
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" href={card.web}>
                    Website
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Portfolio;
