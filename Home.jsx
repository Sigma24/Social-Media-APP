import "./Home.css"
import Top from "../Components/Top";
import Feed from "../Components/Feed";
import Rightbar from "../Components/Rightbar";
import Sidebar from "../Components/Sidebar";
const Home = () => {
  return (
    <div>
      <Top/>
      <div className="Homecontainer">
        <Sidebar/>
        <Feed/>
        <Rightbar profile/>
      </div>
    </div>
  )
}

export default Home;