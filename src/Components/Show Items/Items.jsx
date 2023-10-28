import React, { useContext } from "react";
import { ItemContext } from "../../Store/ItemContext";
const Items = () => {
  const { items, deleteItem } = useContext(ItemContext);

  const handleDeleteClick = (itemId) => {
    deleteItem(itemId);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td>{item.category}</td>
            <td>
              <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Items;
