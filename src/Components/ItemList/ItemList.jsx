import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div className="d-flex justify-content-around align-items-center flex-row flex-wrap pt-4 pb-4">
      {items.map((element) => {
        return <Item key={element.id} element={element} />;
      })}
    </div>
  );
};

export default ItemList;
