import React from "react";
import "./share.css";
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

export default function Share(){
    return(
        <div className="share">
            <div className="ShareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/profile/pr1.jpg" alt="nk"></img>
                    <input placeholder="What's in your mind Safac? " className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                             <PermMedia className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                             <Label className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption" >
                             <Room className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                             <EmojiEmotions className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    );
}