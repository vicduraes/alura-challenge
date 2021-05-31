import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className='header'>
      <img src='./assets/img/logo.svg' alt='AluraDev logo' />
      <input
        type='text'
        name='search-bar'
        className='header__search-bar'
        placeholder='Busque por algo'
      />
      <div>
        <button className='header__button header__button__search'>
          <img src='./assets/img/search-icon.png' alt='search icon button' />
        </button>
        <button className='header__button'>
          <img src='./assets/img/menu-icon.png' alt='menu button' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
