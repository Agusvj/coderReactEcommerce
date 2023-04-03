import React, { useContext } from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cartwidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <div style={{ position: "relative", padding: 10 }}>
      <Link to="/cart">
        <span
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            color: "white",
          }}
        >
          {total}
        </span>
        <UilShoppingCart color="#EFEFEF" size="40" />
      </Link>
    </div>
  );
};

export default Cartwidget;
