import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import GridLoader from "react-spinners/GridLoader";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);

  return (
    <div>
      {items.length > 0 ? (
        <ItemList items={items} />
      ) : (
        <div className="d-flex align-items-center justify-content-center m-5">
          <GridLoader
            color={"orange"}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
