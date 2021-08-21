import MyNav from "./MyNav";
import NavItem from "./NavItem";
import React from "react";

export default function MyNavBar(props) {
    return (
        <MyNav darkMode={props.darkMode} title={props.title} username={props.username} additional={props.children}
               reload={props.reload}>
            <NavItem>Home</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Portfolio</NavItem>
        </MyNav>
    )
}

