import React from "react";
import "./ShowItems.css";
import Items from "./Items";

const ShowItems = () => {
  return (
    <div>
      <h1>Product Summary</h1>
      <div className="main-table">
        <table className="table">
          <thead>
            <tr className="head-tr">
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-data">
            <Items />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowItems;
