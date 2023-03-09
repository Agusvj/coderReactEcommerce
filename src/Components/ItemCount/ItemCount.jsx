import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h5>{contador}</h5>

      <Button variant="secondary" onClick={restar}>
        -
      </Button>

      <Button variant="secondary" onClick={onAdd}>
        Agregar Al Carrito
      </Button>

      <Button variant="secondary" onClick={sumar}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;
