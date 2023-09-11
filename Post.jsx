import React, { useState } from 'react'
import {MoreVert}from "@mui/icons-material"
    import "./Post.css"
    import {user} from "./dummydata"
    
function Post({post}) {
    
    const [like, setLike] = useState(post.like)
    const [isliked, setIsliked] = useState(false)
    const likehandler = ()=>{ 
            setLike(isliked ? like-1 :parseInt (like)+1)
            setIsliked(!isliked)
      
    }
      return (
        <div className="post">
            <div className="postwrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img src={user.filter(u=>u.id===post.userid)[0].profilepicture} alt="" className="postTopleftpic" />
                        <span className="postTopleftname">{user.filter(u=>u.id===post.userid)[0].username}</span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="postTopright"><MoreVert className="postrightIcon"/></div>
                </div>
                <div className="postCenter">
                    <span className="postCenterText">{post.desc}</span>
                    <img src={post.Img}alt="" className="postCenterpic" />
                </div>
                <div className="postBottom">
                    <div className="postBottomleft">
                        <img src="/src/assets/like.png" alt="" onClick={likehandler} className="likebutton" />
                        <img src="/src/assets/heart.png" alt="" onClick={likehandler} className="likebutton" />
                        <span className="postCounter">{like} likes </span>
                    </div>
                    <div className="postBottomright">
                        <span className="postCommenttext">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
        
      )
      
    }
    
    


export default Post
