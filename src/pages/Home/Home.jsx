import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';

import './Home.scss';

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  const clickMenu = () => setIsShown(!isShown);

  return (
    <>
      <Navbar clickMenu={clickMenu} isShown={isShown} />
      <div className='content'>
        {isShown ? <SidebarMenu isShown={isShown} /> : null}
        <CodeEditor />
      </div>
    </>
  );
};

export default Home;
