import React from 'react';
import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <img className='topbarImgLogo' src="assets/Academy.png" alt="logo" width="50px"></img>
            <a href="#" className='logo'>Academy Network</a>
        </div>
        <div className='topbarCenter'>
            <form className='searchbar'>
                <label>
                    <input placeholder="Search here for people or groups" className='searchInput'></input>
                    <img src="assets/Search.png" alt="search" className='searchIcon'/>
                </label> 
                
            </form>
        </div>
        <div className='topbarRight'>
            <div className='topbarIconChat'>
                <img src="assets/Messages.png" alt="Massages" className='topbarIconItem1'/>
                <span className='topbarIconBadge1'>1</span>
            </div>
            <div className='topbarIconBell'>
                <img src="assets/Notifications.png" alt="Notifications"className='topbarIconItem2'/>
                <span className='topbarIconBadge2'>2</span>
            </div>
            <img src="assets/Settings.png" alt="settings" className='topbarIconItem3'/>  
        </div>
      
    </div>
    
  )
}
