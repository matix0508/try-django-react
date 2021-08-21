import Button from "react-bootstrap/Button";
import React from "react";

export default function DarkMode(props) {
    return (
        <Button
            variant={"outline-secondary"}
            onClick={props.handler}
        >
            {props.on ? "Light Mode" : "Dark Mode"}
        </Button>
    )
}