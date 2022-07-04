import React from 'react';
import "./register.css"

export default function Register() {
  return (
    <div className='login1'>
    <div className="loginWrapper1">
        <div className="loginLeft1">
            <img src="assets/Academy.png" alt="logo" className="logo1" width="100px" height="92.35px"></img>
            <h2>WELQOME TO</h2>
            <h3 className="loginLogo1">ACADEMY NETWORK</h3>
            <span className="loginDesc1">The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!</span>
            <div class="plans-switch-container1">
                <button className='push1'><a href="../login/Login.jsx">Login</a></button>
                <button className='push1'><a href="#">Register</a></button>
            </div>
        </div>

        <div className="loginRight block1">
                <form className="loginBox1">
                    <h4>Registration</h4>
                    <fieldset><legend>User Name</legend>
                        <input placeholder='Name' type="text" autoComplete required className="loginInput" />
                    </fieldset>
                    <fieldset><legend>Your Email</legend>
                        <input placeholder='email' type="email" autoComplete required className="loginInput" />
                    </fieldset>
                    <fieldset><legend> New Password</legend>
                        <input placeholder='password' type="password" size="6" required className="loginInput" />
                    </fieldset>
                    <fieldset><legend>Password</legend>
                        <input placeholder='password' type="password" size="6" required className="loginInput" />
                    </fieldset>
                    
                    <button className="loginButton1">Sing Up</button>
                    
                </form>
            </div>
           
        </div>
      
    </div>
  )
}
