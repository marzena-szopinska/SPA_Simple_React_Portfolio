import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
      <header>
        <div className='navigation'>
          <input type='checkbox' className='navigation__checkbox' id='navi-toggle' />
          <label htmlFor='navi-toggle' className='navigation__button'>
            <span className='navigation__icon'>&nbsp;</span>
          </label>

          <div className='navigation__background'>&nbsp;</div>

          <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><NavLink to='/' className='navigation__link' activeClassName='is-active' exact={true}>Home</NavLink></li>
                    <li className='navigation__item'><NavLink to='/portfolio' className='navigation__link' activeClassName='is-active'>Portfolio</NavLink></li>
                    <li className='navigation__item'><NavLink to='/contact' className='navigation__link' activeClassName='is-active'>Contact</NavLink></li>
                </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;
