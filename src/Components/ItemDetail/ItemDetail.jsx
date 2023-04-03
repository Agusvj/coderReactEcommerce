import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "react-bootstrap";

const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className="d-flex justify-content-center align-items-center p-5">
      <Card bg="dark" border="light" className="d-flex flex-row">
        <Card.Img
          variant="top"
          src={productSelected.img}
          style={{ width: "30vw" }}
        />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="border-bottom border-top border-warning pb-4 pt-4 fw-bold fs-2 m-0 text-center">
            {productSelected.title}
          </Card.Title>
          <Card.Text className="text-secondary fs-4 p-3 text-center">
            {productSelected.description}
          </Card.Text>
          <Card.Text className="text-secondary fs-4 p-3 text-center">
            En stock {productSelected.stock}
          </Card.Text>

          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={quantity}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
