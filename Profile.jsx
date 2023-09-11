import React from 'react'
import "./profile.css"
import Top from "../Components/Top";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";
function Profile() {
  return (
    <>    <Top/>
    <div className="profile">
      <Sidebar/>
      <div className="profileright">
        <div className="profilerightTop">
           <div className="profileCover">
           <img src="/src/assets/post/8.png" className='CoverImage' alt="" />
            <img src="/src/assets/person/7.png" className='Avatar' alt="" />
           </div>
           <div className="profileInfo">
            <h4 className='name' >katrina Kaif</h4>
            <span className="desc">Hello its me dawood a passionate web developer</span>
           </div>
        </div>
        <div className="profilerightBottom">
        <Feed/>
       <Rightbar/>
        </div>
      </div>
      
    </div>
    </>

  )
}

export default Profile
