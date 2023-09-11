import "./Sidebar.css"
import {RssFeed,Chat,PlayCircle,Groups,Bookmarks,Help,Work,Event} from "@mui/icons-material"
import Friends from "../Components/Followers"
import {user} from "./dummydata"


const Sidebar =() => {
  return (
    <div className="Sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
                <RssFeed classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">feed</span>
            </li>
            <li className="sidebarlistitem">
                <Chat classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Chat</span>
            </li>
            <li className="sidebarlistitem">
                <PlayCircle classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Vedios</span>
            </li>
            <li className="sidebarlistitem">
                <Groups classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Groups</span>
            </li>
            <li className="sidebarlistitem">
                <Bookmarks classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Bookmarks</span>
            </li>
            <li className="sidebarlistitem">
                <Help classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Question</span>
            </li>
            <li className="sidebarlistitem">
                <Work classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Job</span>
            </li>
            <li className="sidebarlistitem">
                <Event classname="sidebarIcon"/>
                <span className="sidebarlistitemtext">Events</span>
            </li>
            
        </ul>
        <button className="btn1">Show More</button>
        <hr className="SidebarHr"/>
        <ul className="sidebarfriend">
            {user.map((u)=>(
            <Friends key={u.id} User={u}/>
            ))
                
            }
            
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
