import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Rightbar2 from "../../components/rightbar2/Rightbar2";
import Side from "../../components/side/Side";
import Main from "../../components/main/Main";
import "./profile.css"

export default function Profile() {
    return (        
    <>
        <Topbar className="topbar"/>
        <div className="profilebig">
            <Side className="side1"/>


            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCovor">
                        <img className="profileCoverImg" src="assets/post/post2.jpg" alt="nk"/>
                        <img className="profileUserImg" src="assets/profile/pr1.jpg" alt="nk"/>
                        <div className="button">Add Friend +</div>
                        <div className="button bluebutton">Send Massage </div>
                    </div>

                    <div className="profileInfo">
                        <div className="profileInfodiv">
                            <div className="infodiv">
                                <p>56</p>
                                <p>POSTS</p>
                            </div>
                            <div className="infodiv ">
                                <p>88</p>
                                <p>FRIENDS</p>
                            </div>
                            <div className="infodiv">                             
                                <div className="flagdiv">
                                    <div className="flag red"/>
                                    <div className="flag blue"/>
                                    <div className="flag oringe"/>
                                </div>
                                <p>ARMENIA</p>
                            </div>
                        </div>

                        <div className="profileInfoName">
                            <p>Anun</p>
                            <p>Azganun</p>
                        </div>
                        
                        <div className="profileInfodiv1">
                            <div className="social">
                                <img src="assets/social/Facebook.png" alt="" />
                            </div>
                            <div className="social">
                                <img src="assets/social/Twitter.png" alt="" />
                            </div>
                            <div className="social">
                                <img src="assets/social/Instagram.png" alt="" />
                            </div>
                            <div className="social">
                                <img src="assets/social/Youtuube.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="profileRightButtom">
                    <Rightbar2/>  {/* carusel */}
                </div>
                <div className="profileMain">
                    <Main/> {/*takinnery*/}
                </div>
            </div>
             <div className="side2"/>   
        </div> 
            
    </> 
    )
}