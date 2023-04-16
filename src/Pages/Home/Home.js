import React from 'react';
import './Home.css';
import { Navbar } from '../../Component/Navbar/Navbar';
import LeftBar from '../../Component/leftSideContainer/LeftBar';
import { MainPost } from '../../Component/mainPostContainer/MainPost';
import { RightBar } from '../../Component/rightSideContainer/RightBar';

export const Home = () => {
  return (
    <div className='Home'>
        <Navbar />
        <div className='componentContainer'>
          <LeftBar />
          <MainPost />
          <RightBar />
        </div>
    </div>
  )
}
