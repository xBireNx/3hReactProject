import React, { useContext, useState } from "react";
import "./AddItems.css";
import { ItemContext } from "../../Store/ItemContext";

const AddItems = () => {
  const { addItem } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      price.trim() === "" ||
      category === "Select Category"
    ) {
      alert("Please fill up all the fields properly");
    } else {
      const newItem = { id: Math.random() * 9999999999, name, price, category };
      addItem(newItem);
      setName("");
      setPrice("");
      setCategory("");
    }
  };

  return (
    <div className="container">
      <h2>Enter Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form__inputs">
          <label htmlFor="name">Product Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form__inputs">
          <label htmlFor="price">Product Price(₹)</label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <div className="form__inputs">
          <label htmlFor="category">Product Category</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Select Category">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Home Accessories">Home Accessories</option>
          </select>
        </div>

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default AddItems;
