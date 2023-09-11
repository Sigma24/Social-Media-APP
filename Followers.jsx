import React from 'react'
import "./Followers.css"
function freinds({User}) {
  return (
   
    <li className="sidebarfriendlist">
        <img src={User.profilepicture} alt="" className="sidebarfriendpic" />
        <span className="sidebarfriendname">{User.username}</span>
    </li>
    

  )
}

export default freinds
