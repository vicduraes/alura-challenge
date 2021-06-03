import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import './Home.scss';

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const clickMenu = () => setIsShown(!isShown);

  return (
    <>
      <Navbar clickMenu={clickMenu} isShown={isShown} />
      <div className='content'>
        <SidebarMenu isShown={isShown} hidden={!isShown} />
        <CodeEditor />
      </div>
    </>
  );
};

export default Home;
