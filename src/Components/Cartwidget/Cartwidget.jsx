import React from "react";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const Cartwidget = () => {
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
          1
        </span>
        <UilShoppingCart color="#EFEFEF" size="40" />
      </Link>
    </div>
  );
};

export default Cartwidget;
