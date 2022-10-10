import './Navbar.css';
// import aerolines from '../../data/index.js';
import logo from '../../assets/logo.png';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getAirlines, getAirlineById } from '../../Redux/Actions/index.js';

function Navbar() {
    const listAirlines = useSelector(state => state.listAirlines);
    const dispatch = useDispatch();
    
    const [responsive, setResponsive] = useState({
        list: 'airline-list',
        button: 'close'
    });

    useEffect(() => {
        dispatch(getAirlines());
    },[dispatch])



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
        const airlineId = event.target.id;
        dispatch(getAirlineById(airlineId));
        // alert(airlineId)
    }

    return (
        <header className="header">
            <img className="header-logo" src={logo} alt="logo" />
            <nav className="airline-navbar">
                <ul className={responsive.list}>
                    {listAirlines.map(aeroline => {
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
