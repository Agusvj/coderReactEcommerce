import React from "react";
import { products } from "../../productsMock";

import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const productSelected = products.find((element) => element.id === Number(id));

  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Card
        style={{ width: "18rem", maxHeight: "30rem", minHeight: "30rem" }}
        bg="dark"
        border="light"
      >
        <Card.Img variant="top" src={productSelected.img} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="border-bottom border-warning pb-2 fw-bold">
            {productSelected.title}
          </Card.Title>
          <Card.Text>{productSelected.description}</Card.Text>
          <ItemCount stock={productSelected.stock} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
