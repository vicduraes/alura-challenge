import React from 'react';
import { Link } from 'react-router-dom';

import './SidebarMenu.scss';

import codeEditorIcon from '../../assets/images/code-editor-icon-menu.png';
import communityIcon from '../../assets/images/community-icon-menu.png';

const SidebarMenu = (props) => {
  const { isShown } = props;
  return (
    <>
      <div className={isShown ? 'sidebar sidebar--animation' : 'sidebar'}>
        <nav className='sidebar__nav'>
          <ul className='sidebar__ul'>
            <span>M e n u</span>
            <li className='sidebar__items'>
              <Link to='/' className='sidebar__items__link'>
                <img src={codeEditorIcon} alt='menu button' />
                Editor de código
              </Link>
            </li>
            <li>
              <Link to='/comunidade' className='sidebar__items__link'>
                <img src={communityIcon} alt='menu button' />
                Comunidade
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SidebarMenu;
