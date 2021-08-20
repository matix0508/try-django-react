import React from 'react';
import Nav from 'react-bootstrap/Nav'

export default function NavItem(props) {
    let href = props.href || props.name || props.children || "#";
    href = href.toLowerCase();
    return (
    <Nav.Link href={href}>
        {props.name || props.children}
    </Nav.Link>
    )
}