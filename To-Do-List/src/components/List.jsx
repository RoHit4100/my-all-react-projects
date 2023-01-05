import React from "react";

function List(props) {
    return (
        <div onClick={() => props.onChecked(props.id)}>
            <li style={{ cursor: "pointer" }}>{props.item}</li>
        </div>
    );
}

export default List;
