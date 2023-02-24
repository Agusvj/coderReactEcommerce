import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cartwidget = () => {
  return (
    <div style={{ position: "relative", padding: 10 }}>
      <span style={{ position: "absolute", top: "0px", left: "0px" }}>1</span>
      <ShoppingCartIcon />
    </div>
  );
};

export default Cartwidget;
