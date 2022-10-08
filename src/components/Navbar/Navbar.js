import './Navbar.css';
import aerolines from '../../data/index.js';
import React, { useEffect } from 'react';

function Navbar() {
    
    useEffect(() => {
    }, [])

    return (
        <header >
            <nav className="airline-navbar">
                <ol className="airline-list">
                    {aerolines.map(aeroline => {
                    return <li className="airline-item" key={aeroline.id}>{aeroline.name}</li>
                    })}
                </ol>
            </nav>
        </header>
    );
}

export default Navbar;
