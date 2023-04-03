import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  useEffect(() => {
    setContador(initial);
  }, [initial]);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h5 className="fs-4 text-center">
        Cantidad: <span className="text-warning">{contador}</span>
      </h5>

      <div className="d-flex flex-row mt-4">
        <Button variant="secondary" onClick={restar}>
          -
        </Button>

        <Button
          variant="secondary"
          onClick={() => onAdd(contador)}
          className="ms-3 me-3"
        >
          Agregar Al Carrito
        </Button>

        <Button variant="secondary" onClick={sumar}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
