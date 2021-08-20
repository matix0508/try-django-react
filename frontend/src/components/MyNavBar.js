import MyNav from "./MyNav";
import NavItem from "./NavItem";
import React from "react";

export default function MyNavBar(props) {
    return (
        <MyNav darkMode={props.darkMode} title={props.title}>
            <NavItem>Blog</NavItem>
            <NavItem>About</NavItem>
        </MyNav>
    )
}

