import React from 'react';
import MainCenter from './mainCenter/MainCenter';
import MainLeft from './mainLeft/MainLeft';
import MainRight from './mainRight/MainRight';
import './main.css'

export default function Main() {
  return (
    <div className='mainconteiner'>
      <div className="mainLeft"> <MainLeft/> </div>
      <div className="mainCeft"> <MainCenter/></div>
      <div className="mainRight"> <MainRight/></div>
    </div>
  )
}
