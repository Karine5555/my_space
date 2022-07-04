import React from 'react';
import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <img src="assets/Academy.png" alt="logo" className="logo" width="100px" height="92.35px"></img>
                <h2>WELQOME TO</h2>
                <h3 className="loginLogo">ACADEMY NETWORK</h3>
                <span className="loginDesc">The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!</span>
                <div class="plans-switch-container">
                <button className='push'><a href="#">Login</a></button>
                <button className='push' ><a href="../login/Login.jsx">Register</a></button>
                </div>
            </div>
            <div className="loginRight block">
                <form className="loginBox">
                    <h4>Log in</h4>
                    
                    <fieldset><legend>Your Email</legend>
                        <input placeholder='email' type="email" autoComplete required className="loginInput" />
                    </fieldset>
                    <fieldset><legend>Password</legend>
                        <input placeholder='password' type="password" size="6" required className="loginInput" />
                    </fieldset>
                    
                    <button className="loginButton">Log In</button>
                    <a href="" className="loginForgot">Forgot Password?</a>
                    <a href="" className="loginForgot">Creat Acaunt</a>
                </form>
                    
                

            </div>
        </div>
      
    </div>
  )
}
