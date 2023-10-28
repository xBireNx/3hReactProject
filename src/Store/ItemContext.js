import React, { createContext, useState } from "react";

const demoItems = [
  {
    id: 1,
    name: "Mobile",
    price: "12000",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Face Wash",
    price: "490",
    category: "Cosmetics",
  },
  {
    id: 3,
    name: "Table",
    price: "3600",
    category: "Home Accessories",
  },
];

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState(demoItems);

  const addItem = (item) => {
    setItems((prev) => {
      return [item, ...prev];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, deleteItem }}>
      {props.children}
    </ItemContext.Provider>
  );
};
