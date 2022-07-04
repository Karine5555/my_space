import React from 'react';
import './mainRight.css'

export default function MainRight() {
  return (
    <div className='mainRight'>
    <section className='mainfirstsection'>
      <h3> <span> Video <b>3</b> </span>
            <img src="assets/More.png" alt="more" width="30px" height="10px"/>
      </h3>
      <video>

      </video>
      <video>

      </video>
    </section>
    
    <section className='mainfirstsection secondsec'>
      <h3> <span> Groups <b>11</b> </span>
            <img src="assets/More.png" alt="more" width="30px" height="10px"/>
      </h3>
      <div className='totaldiv'>
        <div className='total1'>
          <ol className='totalOl'>
            <li>Newest</li>
            <li>Popular</li>
            <li>Active</li>
          </ol>
        </div>
        <div className='total2'>
          <ul className='total2Ul'>
            <li>
              <img src="assets/profile/post1.jpg" alt="group" className='total2img1'/>
              <h4>Group #1
                <span>1500 members</span>
              </h4>
              <img src="assets/anim/a4.png" alt="group" className='total2img2'/>
              
            </li>
            <li>
              <img src="assets/profile/post1.jpg" alt="group" className='total2img1'/>
              <h4>Group #1
                <span>557 members</span>
              </h4>
              <img src="assets/anim/a4.png" alt="group" className='total2img2'/>
              
            </li>
            <li>
              <img src="assets/profile/post1.jpg" alt="group" className='total2img1'/>
              <h4>Group #1
                <span>670 members</span>
              </h4>
              <img src="assets/anim/a4.png" alt="group" className='total2img2'/>
              
            </li>
            <li>
              <img src="assets/profile/post1.jpg" alt="group" className='total2img1'/>
              <h4>Group #1
                <span>155 members</span>
              </h4>
              <img src="assets/anim/a4.png" alt="group" className='total2img2'/>
              
            </li>
            <li>
              <img src="assets/profile/post1.jpg" alt="group" className='total2img1'/>
              <h4>Group #1
                <span>89 members</span>
              </h4>
              <img src="assets/anim/a4.png" alt="group" className='total2img2'/>
              
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  )
}
