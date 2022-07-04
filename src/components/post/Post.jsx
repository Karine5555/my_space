import React, { useState } from "react";
import "./post.css"
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../dummyData"

export default function Post({post}) {
    // console.log(post);
    //const user=Users.filter(u=>u.id===1)
    //console.log(user[0].username);
    const [like,setLike]=useState(post.like)
    const [isLiked,setIsLiked]=useState(false)

    const likeHandler=()=>{
        setLike(isLiked ? like-1: like+1)
        setIsLiked(!isLiked
            
            )
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                         <img className="postProfileImg" src="assets/profile/pr1.jpg" alt="nk" />
                        <span className="postUserName">Anun Azganun</span>                
                        <p className="postDate">{post.date}</p>                
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/like1.jpg" alt="" onClick={likeHandler} />
                        <img className="likeIcon" src="assets/heart.png" alt="" onClick={likeHandler} />
                        <span className="postLikeCounter"> {like}people Liked it</span>
                        
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> {post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
    
}