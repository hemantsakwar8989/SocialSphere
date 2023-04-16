import React from 'react'
import './LeftBar.css'
import Image from '../Images/Profile.png'
import Image1 from '../Images/image1.jpg'
import Image2 from '../Images/image2.jpg'
import Image3 from '../Images/image3.jpg'
import Image4 from '../Images/image4.jpg'
import Image5 from '../Images/image5.jpg'
import Image6 from '../Images/image6.jpg'

const LeftBar = () => {
  return (
    <div className="LeftBar">
      <div className='NotificationsContainer'>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <p>Notifications</p>
          <p style={{color:'gray'}}>See All</p>
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Rishi started to following you</p>
          <img src={`${Image}`} className='followingUserimg' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Rishi liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:-10}}>
          <img src={`${Image}`} className='notificationimg' alt="" />
          <p style={{marginLeft:'5px',color:'gray',fontSize:'14px',textAlign:'start',width:'120px'}}>Hardin liked your post</p>
          <img src={`${Image}`} className='likeImage' alt="" />
        </div>
      </div>

      <div className='NotificationsContainer'>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <p>Explore</p>
          <p style={{color:'gray'}}>See All</p>
        </div>
        <div>
          <img src={`${Image1}`} className='exploreImg' alt="" />
          <img src={`${Image2}`} className='exploreImg' alt="" />
          <img src={`${Image3}`} className='exploreImg' alt="" />
          <img src={`${Image4}`} className='exploreImg' alt="" />
          <img src={`${Image5}`} className='exploreImg' alt="" />
          <img src={`${Image6}`} className='exploreImg' alt="" />
        </div>
      </div>  
    </div>
  )
}

export default LeftBar;