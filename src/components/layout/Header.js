import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To do list</h1>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: '#61DBFB',
    textAlign: 'center',
    padding: '10px',
}

export default Header;