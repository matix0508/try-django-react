import React from 'react';
import Nav from 'react-bootstrap/Nav'
import {useLocation} from "react-router-dom";

export default function NavItem(props) {
    let href = props.href || props.name || props.children || "#";
    href = href.toLowerCase();
    return (
    <Nav.Link active={useLocation().pathname.includes(href)} href={href}>
        {props.name || props.children}
    </Nav.Link>
    )
}