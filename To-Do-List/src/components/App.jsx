import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [list, setList] = useState([]);
  function handelClick(newItem, setNewItem) {
    setList((prevItem) => {
      return [...prevItem, newItem];
    });
    setNewItem("");
  }
  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handelClick} />
      <div>
        <ul>
          {list.map((listItem, index) => (
            <List
              item={listItem}
              onChecked={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
