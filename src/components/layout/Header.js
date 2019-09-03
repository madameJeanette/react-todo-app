import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <header style={hdrStyle}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> |  <Link
            style={linkStyle} to="/about">About</Link>
        </header>
    )
           
}

const hdrStyle = {
    background:'#1B1464',
    color:'#fff',
    padding: '10px',
    textAlign: 'center'
}

const linkStyle = {
    color:'#fff',
    textDecoration: 'none'
}

export default Header;