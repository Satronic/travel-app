import './Navbar.css';
import aerolines from '../../data/index.js';
import React, { useState } from 'react';

function Navbar() {
    
    const [responsive, setResponsive] = useState({
        list: 'airline-list',
        button: 'close'
    })

    function seeResponsiveMenu(){
        if(responsive.button === 'close'){
            setResponsive({
                list: 'airline-list-responsive',
                button: 'open'
            })
        }
        if(responsive.button === 'open'){
            setResponsive({
                list: 'airline-list',
                button: 'close'
            })
        }
    }

    return (
        <header className="header">
            <h1 className="header-logo">
                TravelFree
            </h1>
            <nav className="airline-navbar">
                <ul className={responsive.list}>
                    {aerolines.map(aeroline => {
                    return <li className="airline-item" key={aeroline.id}>{aeroline.name}</li>
                    })}
                </ul>
            </nav>
            <i id="menu-icon" class="material-icons" onClick={seeResponsiveMenu}>
                {responsive.button === 'close' ? 'menu' : 'close'}
            </i>
        </header>
    );
}

export default Navbar;
