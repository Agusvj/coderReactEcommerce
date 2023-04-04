import React, { useEffect } from "react";
import { useState } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Button } from "react-bootstrap";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    emailConfirm: "",
    phone: "",
  });

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (
      userData.name !== "" &&
      userData.phone !== "" &&
      userData.email !== "" &&
      userData.emailConfirm !== "" &&
      userData.email === userData.emailConfirm
    ) {
      setDisable(false);
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let total = getTotalPrice();

    let order = {
      buyer: userData,
      items: cart,
      total,
      date: new Date(),
    };

    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column col-lg-4 justify-content-center align-items-center p-5 border"
      >
        <p className="fs-5 fw-bold text-center mb-5">
          Rellene los datos de forma correcta, para poder confirmar la compra
        </p>
        <label htmlFor="nombre" className="text-warning fw-bold">
          Nombre:
        </label>
        <input
          type="text"
          placeholder="Escriba su nombre completo"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          className="w-100 mb-3 mt-3"
          id="nombre"
        />
        <label htmlFor="email" className="text-warning fw-bold">
          Email:
        </label>
        <input
          type="email"
          placeholder="Ingrese un Email valido"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          className="w-100 mb-3 mt-3"
          id="email"
        />
        <label htmlFor="emailConfirmation" className="text-warning fw-bold">
          Confirmar Email:
        </label>
        <input
          type="email"
          placeholder="Confirme la direccion de Email"
          value={userData.emailConfirm}
          onChange={(e) =>
            setUserData({ ...userData, emailConfirm: e.target.value })
          }
          className="w-100 mb-3 mt-3"
          id="emailConfirmation"
        />
        <label htmlFor="telefono" className="text-warning fw-bold">
          Numero de telefono:
        </label>
        <input
          type="number"
          placeholder="ingrese su numero de telefono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          className="w-100 mb-3 mt-3"
          id="telefono"
        />

        <Button
          type="submit"
          variant="secondary"
          className="mt-3"
          disabled={disable}
        >
          Comprar
        </Button>
      </form>
    </div>
  );
};

export default FormCheckout;
