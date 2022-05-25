import React from 'react'

import './SignIn.scss'
function SignIn() {
  return (
    <div className="container">
      <div className="sign-in">
        <h3>Sign in</h3>
        <form className='form form-login'>
          <div className="row">
            <div className="input-field col s12">
            <input type="email" name="email" placeholder='Email' className='validate'/>
            </div>
            <div className="input-field col s12">
            <input type="password" name="password" placeholder='Password' className='validate'/>
            </div>
          </div>
          <div className="row">
            <button className='wawes-effect wawes-light btn purple'>Sign in</button>
            <a href='/' className='btn-outline btn-req'>Sign up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn