import React from 'react';
import './mainLeft.css'

export default function MainLeft() {
  
  return (
    <div className='mainLeft'>
      <section className='firstsection'>
        <h3> <span> About Me </span>
              <main className='more'>
                <img src="assets/More.png" alt="more" width="30px" height="10px"/>
                  {/* <ul className='burgerUlLi'>
                    <li>Edit Post</li>
                    <li>Delete Post</li>
                    <li>add to Favourites</li>
                    <li>Report Post</li>
                  </ul> */}

                </main>
        </h3>
        <p className='mainLeftText'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nemo illo quaerat, laudantium aliquam molestias nesciunt hic consectetur deserunt suscipit.</p>
        <table>
          <tr>
            <td>Joined</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <td>City</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>Lorem ipsum</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>28</td>
          </tr>
        </table>
      </section>
    

    
      <section className='firstsection  secondsection'>
        <h3> <span> Photos <b>74</b></span>
              <img src="assets/More.png" alt="more" width="30px" height="10px"/>
        </h3>
        <div className='videorel'>
          <img />
          <img/>
          <img/>
          <img/>
          <img/>
          <img/>
          <img/>
          <img/>
          <p className='number'>+43</p>
        </div>
      </section>
    </div>

  )
}
