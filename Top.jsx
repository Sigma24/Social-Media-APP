import "./Top.css"
import { Search, Person, Chat, Notifications} from "@mui/icons-material"



const Top = () => {
    return (
        <>
            <div className="topconatiner">
                <div className="topleft">
                    <span className="logo">Dawood Facebook Lite</span>
                </div>
                <div className="topcenter">
                    <div className="searchbar">
                        <Search className="searchicon"/>
                        <input type="text" className="inpt" placeholder="Search for friends, post or vedios" />
                    </div>
                </div>
                <div className="topright">
                    <div className="topbarlinks">
                        <span className="topbarlink">HomePage</span>
                        <span className="topbarlink">Timeline</span>
                    </div>
                    <div className="topbarIcon">
                       <div className="topbariconItem">
                        <Person/>
                        <span className="iconcounter">1</span>
                       </div>
                       <div className="topbariconItem">
                        <Chat/>
                        <span className="iconcounter">1</span>
                       </div>
                       <div className="topbariconItem">
                        <Notifications/>
                        <span className="iconcounter">1</span>
                       </div>
                    </div>

                    <img src="/src/assets/post/10.png" alt="" className="profilePic" />
                    
                </div>
            </div>

        </>
    )
}

export default Top
