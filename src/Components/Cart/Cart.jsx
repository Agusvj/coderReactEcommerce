import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "¿Estas seguro/a?",
      text: "Perderas los productos de tu carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire(
          "Eliminado!",
          "Tu carrito se vacio correctamente.",
          "success"
        );
      }
    });
  };

  const precioTotal = getTotalPrice();

  if (orderId) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center mt-5 mb-5">
        <p className="fs-1 fw-bold">¡Gracias por confiar en nosotros!</p>
        <p className="fs-3 text-secondary">
          Su comprobante de pago es :{" "}
          <span className="text-warning">{orderId}</span>
        </p>
        <Link to="/" className="text-white fs-5">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!showForm ? (
        <div className="d-flex align-items-center justify-content-center flex-column mt-5">
          {cart.length > 0 ? (
            <div className="mt-5 mb-5 col-12 d-flex flex-column align-items-center justify-content-center">
              <p className="fs-3 fw-bold text-warning">
                Sus productos seleccionados:
              </p>
              {cart.map((elemento) => {
                return (
                  <div
                    key={elemento.id}
                    className="d-flex flex-row col-8 mb-3 mt-3 align-items-center justify-content-between border p-2"
                  >
                    <h2 className="fs-4 m-0 col-4 text-break">
                      {elemento.title}
                    </h2>
                    <h3 className="fs-4 m-0 col-2">x {elemento.quantity}</h3>
                    <h3 className="fs-4 m-0 col-2">${elemento.price}</h3>
                    <img
                      src={elemento.img}
                      alt={elemento.title}
                      style={{ width: "50px" }}
                    />
                    <Button
                      onClick={() => deleteProductById(elemento.id)}
                      variant="secondary"
                      className="col-2"
                    >
                      Eliminar
                    </Button>
                  </div>
                );
              })}
              <h3 className="mt-5">
                El precio <span className="text-warning">TOTAL</span> a pagar
                es: <span className="text-warning">${precioTotal}</span>
              </h3>
              <div className="mt-5 col-8 d-flex flex-row align-items-center justify-content-center">
                <Button
                  onClick={() => setShowForm(true)}
                  variant="secondary"
                  className="col-3 me-3"
                >
                  Terminar la compra
                </Button>
                <Button
                  onClick={clear}
                  variant="secondary"
                  className="col-3 ms-3"
                >
                  Limpiar carrito
                </Button>
              </div>
            </div>
          ) : (
            <div className="m-5 d-flex flex-column align-items-center justify-content-center">
              <p className="fs-2 fw-bold text-center">
                ¡Aun no hay productos seleccionados!
              </p>
              <Link to="/" style={{ color: "orange", fontSize: "1.5em" }}>
                Volver a la tienda
              </Link>
              <img
                src="/empty.png"
                alt=""
                style={{ width: "200px" }}
                className="mt-5"
              />
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default Cart;
