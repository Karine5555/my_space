import React,{useState} from 'react';
import './newsfeed.css';

import {ArrowForwardIos,  ArrowBackIos} from '@mui/icons-material'


export default function Newsfeed() {
const [active,setActive] = useState(false)

const activateNav = ()=> {
    setActive(!active)
}

  return (
    <div className={active ? 'header' : 'header-mobile'}>
            <div className='menu-icon' onClick={activateNav}>
                {!active ? <ArrowForwardIos className='menu'/>: <ArrowBackIos className="close-icon" />}
            </div>

      <nav>
        <ul className={active ? 'ul-item' : 'ul-item oicon'}>
            <li>
                <img src="assets/icons/Vector.png" alt="newsfeed" width="25px"/>
                <a href="#">Newsfeed</a>
            </li>
            <li>
                <img src="assets/anim/a1.png" alt="newsfeed" width="25px"/>
                <a href="#">Profile</a>
            </li>
            <li>
                <img src="assets/icons/Groups.png" alt="newsfeed" width="25px"/>
                <a href="#">Groups</a>
            </li>
            <li>
                <img src="assets/icons/Friends.png" alt="newsfeed" width="25px"/>
                <a href="#">Friends</a>
            </li>
            <li>
                <img src="assets/icons/Videos.png" alt="newsfeed" width="25px"/>
                <a href="#">Video</a>
            </li>
            <li>
                <img src="assets/icons/Vectorv.png" alt="newsfeed" width="25px"/>
                <a href="#">Pictures</a>
            </li>
        </ul>
      </nav>
    </div>
  )
}
