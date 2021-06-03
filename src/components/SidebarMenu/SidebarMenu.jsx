import React from 'react';
import { NavLink } from 'react-router-dom';

import './SidebarMenu.scss';

import codeEditorIcon from '../../assets/images/code-editor-icon-menu.png';
import communityIcon from '../../assets/images/community-icon-menu.png';

const SidebarMenu = (props) => {
  const { isShown } = props;
  return (
    <>
      <section className={isShown ? 'overlay' : ''}>
        <div className={isShown ? 'sidebar sidebar--animation' : 'sidebar'}>
          <nav className='sidebar__nav'>
            <ul className='sidebar__ul'>
              <span>M e n u</span>
              <li className='sidebar__items'>
                <NavLink
                  exact
                  to='/'
                  className='sidebar__items__link'
                  activeClassName='sidebar__items__link--active'
                >
                  <img src={codeEditorIcon} alt='menu button' />
                  Editor de código
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/comunidade'
                  exact
                  className='sidebar__items__link'
                  activeClassName='sidebar__items__link--active'
                >
                  <img src={communityIcon} alt='menu button' />
                  Comunidade
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default SidebarMenu;
