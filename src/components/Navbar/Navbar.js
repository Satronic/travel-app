import './Navbar.css';
import aerolines from '../../data/index.js';
import logo from '../../assets/logo.png';
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

    function selectAirline(event) {
        const selectedAirline = event.target.id;
        console.log(selectedAirline);
    }

    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="logo" />
            <nav className="airline-navbar">
                <ul className={responsive.list}>
                    {aerolines.map(aeroline => {
                        return <li 
                            id={aeroline.id} 
                            className="airline-item" 
                            key={aeroline.id} 
                            onClick={selectAirline}
                            >{aeroline.name}
                        </li>
                    })}
                </ul>
            </nav>
            <i id="menu-icon" className="material-icons" onClick={seeResponsiveMenu}>
                {responsive.button === 'close' ? 'menu' : 'close'}
            </i>
        </header>
    );
}

export default Navbar;
