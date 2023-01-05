import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [newName, showNewName] = useState("");
    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick() {
        showNewName(name);
    }
    return (
        <div className="container">
            <h1>Hello {newName}</h1>
            <input
                onChange={handleChange}
                type="text"
                placeholder="What's your name?"
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    );
}

//When button is child of form tag then when button will click by default it will called onSubmit function and refresh the page to make post, get req,
//to prevent this behavior we can tap into event parameter from we can access the attributes, we can use preventDefault() function to prevent default behavior.