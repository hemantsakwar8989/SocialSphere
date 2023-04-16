import React from 'react';
import './Navbar.css';
import searchIcon from '../Images/search.png';
import NotificationIcon from '../Images/bell.png';
import MessageIcon from '../Images/message.png';
import ProfileImage from '../Images/Profile.png';

export const Navbar = () => {
  return (
    <div className="mainNavbar">
        <div className='logoContainer'>
            <p>solo</p>
        </div>

        <div>
            <div className='searchInputContainer'>
                <img src={`${searchIcon}`} className='searchIcon' alt="" />
                <input type="text" className='searchInput' placeholder='search . . .' name="" id="" />
            </div>
        </div>

        <div className='IconsContainer'>
            <img src={`${NotificationIcon}`} className='Icons' alt="" />
            <img src={`${MessageIcon}`} className='Icons' alt="" />

            <div style={{display:'flex',alignItems:'center'}}>
                <img src={`${ProfileImage}`} className='ProfileImage' alt="" />
                <p style={{marginLeft:'5px'}}>hardin</p>
            </div>
        </div>
    </div>
  )
}
