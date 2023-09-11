import React from 'react'
import "./online.css"

function Online({User}) {
  return (
    <li className="onlinefriend">
    <div className="onlinefriendimg">
      <img src={User.profilepicture} alt="" className="onlinefriendpic" />
      <span className="onlinetext"></span>
    </div>
    <span className="onlinefriendname">{User.username}</span>
  </li>
  )
}

export default Online
