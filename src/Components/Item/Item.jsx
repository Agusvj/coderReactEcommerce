import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ element }) => {
  return (
    <div className="col-lg-3 col-md-5 col-12 d-flex justify-content-center align-items-center pb-4">
      <Card
        style={{ width: "18rem", maxHeight: "30rem", minHeight: "30rem" }}
        bg="dark"
        border="light"
      >
        <Card.Img variant="top" src={element.img} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="border-bottom border-warning pb-2 fw-bold">
            {element.title}
          </Card.Title>
          <Card.Text
            className="text-break overflow-auto text-secondary"
            style={{ maxHeight: "30px" }}
          >
            {element.description}
          </Card.Text>
          <Card.Text>${element.price}</Card.Text>
          <Link to={`/itemDetail/${element.id}`}>
            <Button variant="secondary">Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
