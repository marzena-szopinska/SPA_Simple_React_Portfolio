import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <ul className='nav'>
                <li><NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink></li>
                <li><NavLink to='/projects' activeClassName='is-active'>Projects</NavLink></li>
                <li><NavLink to='/contact' activeClassName='is-active'>Contact</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;