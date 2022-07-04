import React from 'react';
import './side.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Newsfeed from './compon/newsfeed/Newsfeed';

export default function Side() {
  return (
    <div className='side'>
      <Router>
        <Routes>
            <Route path='/' element={<Newsfeed/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
