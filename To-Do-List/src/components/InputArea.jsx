import React, { useState } from "react";

function InputArea(props) {
    const [newItem, setNewItem] = useState("");
    function handleChange(event) {
        const item = event.target.value;
        setNewItem(item);
    }

    return (
        <div className="form">
            <input
                onChange={handleChange}
                name="newItem"
                type="text"
                placeholder="Add new task here"
                value={newItem}
            />
            <button onClick={() => props.onAdd(newItem, setNewItem)}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;
