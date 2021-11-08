import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { icons } from "react-icons/lib";

import "./Portfolio.css";
import Data from "./Data";
import { getByDisplayValue } from "@testing-library/react";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);

  const getModal = Value =>{
    setShowModal(Value)
  }





  return (
    <div id="portfolio" className="outer-portfolio">
      {Data.map((card, key) => {
        return (
          <div className="porto">
            <Card
              key={key}
              style={{
                width: "18rem",
                height: "30rem",
                backgroundColor: "#0F083D",
              }}
            >
              <Card.Img src={card.image} style={{ height: "25rem" }} />
              <Card.Body>
                {/* <Card.Title style={{color: "white"}}>{card.title}</Card.Title>
              <Card.Text style={{color: "white"}}>{card.text}</Card.Text> */}
                <Row>
                  <Col>
                    <Button variant="link" onClick={() => getModal(card.id)}>
                      Learn More{" "}
                      <span>
                        <BsChevronRight />
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {showModal && (
            <Modal
              show={showModal === card.id}
              onHide={() => setShowModal(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  {card.title}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>hallo</p>
              </Modal.Body>
            </Modal>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Portfolio;
