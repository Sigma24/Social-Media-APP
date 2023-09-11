import React from 'react'
import "./Login.css"
function login() {
  return (
    <>
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">David Official.</h3>
                <span className="logindesc">Connect with friends and the world around you on  DavidOfficial.</span>
            </div>
            <div className="loginright">
              <div className="loginbox">
                <input type="text"placeholder='Enter Email' className='logininput'/>
                <input type="password"placeholder='Password' className='logininput'/>
                <button className="loginbtn">Log in</button>
                <span className="loginforgot">Forget password?</span>
                <button className="loginregister">Create new account</button>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default login
