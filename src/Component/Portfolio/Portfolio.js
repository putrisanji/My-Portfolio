import React, { useState } from "react";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import { BsChevronRight } from "react-icons/bs";
import { icons } from "react-icons/lib";

import "./Portfolio.css";
import Data from "./Data";

function Portfolio() {
  const [showModal, setShowModal] = useState(false);

  const getModal = (Value) => {
    setShowModal(Value);
  };

  return (
    <div id="portfolio" className="outer-portfolio">
      {Data.map((card, key) => {
        return (
          <div className="porto">
            <Card
              key={key}
              style={{
                width: "60%",
                height: "90%",
                backgroundColor: "#0F083D",
              }}
            >
              <Card.Img
                src={card.image}
                style={{ width: "100%", padding: "0.4rem" }}
              />
              <Card.Body>
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
                  <Modal.Title>{card.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{card.textA}</p>
                  <img src={card.imageA} />
                  <p>{card.textB}</p>
                  <img src={card.imageB} />
                  <p>{card.textA}</p>
                  <img src={card.imageC} />
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
