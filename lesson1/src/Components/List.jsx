import React, { useState } from "react";

function List() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (item.trim() === "") return; // খালি হলে কিছু করবে না

    setItems([...items, item]); // নতুন item যোগ করবে
    setItem(""); // input খালি করবে
  };

  return (
    <div className="container mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter an item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

      <button
        className="btn btn-primary mt-2"
        onClick={handleSubmit}
      >
        Submit
      </button>

      {items.length === 0 ? (
        <p className="mt-3">No item found</p>
      ) : (
        <ul className="list-group mt-3">
          {items.map((i, index) => (
            <li key={index} className="list-group-item">
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;