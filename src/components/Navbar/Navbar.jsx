import React, { useState } from 'react';
import './Navbar.scss';

import menu from '../../assets/images/menu-icon.png';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/search-icon.png';
import exit from '../../assets/images/exit-icon.png';

const Navbar = (props) => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const clickSearch = () => setIsOpenSearch(!isOpenSearch);

  const { clickMenu, isShown } = props;

  return (
    <header className='header'>
      <img src={logo} alt='AluraDev logo' hidden={isOpenSearch} />
      <input
        type='text'
        name='search-bar'
        className='header__search-bar'
        placeholder='Busque por algo'
        hidden={!isOpenSearch}
      />
      <div>
        <button
          className='header__button header__button__search'
          onClick={clickSearch}
        >
          <img src={!isOpenSearch ? search : exit} alt='search icon button' />
        </button>
        <button className='header__button menu-button' onClick={clickMenu}>
          <img src={!isShown ? menu : exit} alt='menu button' />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
