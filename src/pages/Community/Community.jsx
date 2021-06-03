import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

const Community = () => {
  const [isShown, setIsShown] = useState(false);
  const clickMenu = () => setIsShown(!isShown);
  return (
    <>
      <Navbar clickMenu={clickMenu} isShown={isShown} />
      <div className='content'>
        <SidebarMenu isShown={isShown} hidden={!isShown} />
        <h3>Esta é a página da comunidade! Construção em andamento</h3>
      </div>
    </>
  );
};

export default Community;
