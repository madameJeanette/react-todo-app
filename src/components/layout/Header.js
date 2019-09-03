import React from 'react';

function Header() {
    return (
        <header style={hdrStyle}>
            <h1>Todo List</h1>
        </header>
    )
           
}


const hdrStyle = {
    background:'#1B1464',
    color:'#fff',
    padding: '10px',
    textAlign: 'center'
    

}
export default Header;