import React from 'react'

import './SignUp.scss'


function SignUp() {
  return (
    <div className="container">
    <div className="sign-up">
      <h3>Sign in</h3>
      <form className='form form-login'>
        <div className="row">
        <div className="input-field col s12">
          <input type="text" name="username" placeholder='Username' className='validate'/>
          </div>
          <div className="input-field col s12">
          <input type="email" name="email" placeholder='Email' className='validate'/>
          </div>
          <div className="input-field col s12">
          <input type="password" name="password" placeholder='Password' className='validate'/>
          </div>
        </div>
        <div className="row">
          <button className='wawes-effect wawes-light btn purple'>Sign up</button>
          <a href='/' className='btn-outline btn-req'>Sign in</a>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp