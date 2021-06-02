import React from 'react';
import './Navbar.scss';

import menu from '../../assets/images/menu-icon.png';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search-icon.png';

const Navbar = (props) => {
  const { clickMenu } = props;

  return (
    <header className='header'>
      <img src={logo} alt='AluraDev logo' />
      <input
        type='text'
        name='search-bar'
        className='header__search-bar'
        placeholder='Busque por algo'
      />
      <div>
        <button className='header__button header__button__search'>
          <img src={search} alt='search icon button' />
        </button>
        <button className='header__button menu-button' onClick={clickMenu}>
          <img src={menu} alt='menu button' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
