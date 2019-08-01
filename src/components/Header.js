import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='container'>
                <ul className='nav'>
                    <li><NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink></li>
                    <li><NavLink to='/portfolio' activeClassName='is-active'>Portfolio</NavLink></li>
                    <li><NavLink to='/contact' activeClassName='is-active'>Contact</NavLink></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
