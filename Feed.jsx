import "./Feed.css"
import Share from "../Components/Share"
import Post from "../Components/Post"
import { Posts } from "./dummydata"


const Feed =()=> {
  return (
    <div className="feed">
     <Share/>
     {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
        
        
    </div>
  )
}

export default Feed
