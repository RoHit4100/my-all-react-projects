import React, { useState } from "react";

function Button() {
    const [isMouseOver, setMouseOver] = useState(false);

    function handelMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <button type="submit"
            style={{ backgroundColor: isMouseOver && "black" }}
            onMouseOver={handelMouseOver}
            onMouseOut={handleMouseOut}
        >
            Submit
        </button>
    );
}

export default Button;
