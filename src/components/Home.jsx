import React from 'react';
import Menu from './Menu';
import MainContent from './MainContent';

function Home(){
    return(
        <div className='body'>
      <Menu />
      <MainContent/>
      </div>
    )
}

export default Home;