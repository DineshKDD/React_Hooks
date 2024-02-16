import React, { useState, useReducer } from "react";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
}

function ArrayDemo() {
  const [newItem, setNewItem] = useState("");
  const [items, dispatch] = useReducer(listReducer, []);

  const addItem = () => {
    if (newItem.trim() !== "") {
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setNewItem("");
    }
  };

  const removeItem = (index) => {
    dispatch({ type: "REMOVE_ITEM", payload: index });
  };

  console.log(removeItem);
  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>

      <button onClick={addItem}>AddItem</button>

      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button onClick={() => removeItem(index)}>RemoveItem</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ArrayDemo;
