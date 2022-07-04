import React from "react";
import "./rightbar.css"
import {Users} from "../../dummyData";
import Online from "../online/Online.jsx"

export default function Rightbar({profile}) {
    const HomeRightbar=()=>{
        return (
            <>
            <div className="birthdayContainter">
                <img className="birthdayImg" src="assets/gift.png" alt="gift" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends </b> hav a birthday today
                    </span>
            </div>
            <img className="rightbarAd" src="assets/14.jpg" alt="14" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {Users.map(u=>(
                    <Online key={u.id} user={u}/>
                ))}
                
            </ul>
            </>
        ) 
    }
    const ProfileRightbar=()=>{
        return (
            <>
            <h4 className="rightbarTitle">User Information </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Armenia</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Yerewan</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends </h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/profile/pr1.jpg" alt="" className="rightbarfollowwingImg" />
                    <span className="rightbarFollowingName"> John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile/pr2.jpg" alt="" className="rightbarfollowwingImg" />
                    <span className="rightbarFollowingName"> John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile/pr3.jpg" alt="" className="rightbarfollowwingImg" />
                    <span className="rightbarFollowingName"> John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile/pr4.jpg" alt="" className="rightbarfollowwingImg" />
                    <span className="rightbarFollowingName"> John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/profile/pr5.jpg" alt="" className="rightbarfollowwingImg" />
                    <span className="rightbarFollowingName"> John Carter</span>
                </div>
            </div>
            
            </>
        )
    }
    return(
        <div className="rightbar">
        <div className="rightbarWrapper">
           {profile ? <ProfileRightbar/>:<HomeRightbar/>}
        </div>
        </div>

    )
    
}