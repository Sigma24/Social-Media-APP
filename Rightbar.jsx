import "./Rightbar.css"
import {user} from "./dummydata"
import Online from "../Components/Online"

const Rightbar =({profile})=> {
  const Homerightbar=()=>{
    return(
    <>
      <div className="birthdaycontainer">
          <img src="/src/assets/gift.png" alt=""  className="birthdaypic"/>
          <span className="birthdaytext"><b>Baber azam</b> and <b>3 others friends</b> have birthday today</span>
        </div>
        <img src="/src/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTittle">Online Friends</h4>
        <ul className="onlinefriendslist">
        {user.map((u) => (
          <Online key={u.id} User={u} />
        ))}
        </ul>
    </>
  )}
  const Profilerightbar =()=>{
    return(
      <>
      <h4 className="rightTitle">user Information</h4>
      <div className="rightInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoKeyValue">Rawalpindi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoKeyValue">Aghar Mall Scheme</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Merital Status:</span>
          <span className="rightbarInfoKeyValue">Single</span>
        </div>
      </div>
      <h4 className="rightTitle">user Friends</h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowing">
          <img src="/src/assets/post/1.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/src/assets/person/2.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/src/assets/post/3.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/src/assets/post/8.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/src/assets/post/5.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
        <div className="rightbarfollowing">
          <img src="/src/assets/post/6.png" alt="" className="followerimage" />
          <span className="followername">Eliza</span>
        </div>
      </div>
      </>
    )
  }
  




  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <Profilerightbar/>
      </div>
      
      </div>
   
  )
}

export default Rightbar
