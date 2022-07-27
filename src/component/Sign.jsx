import React from 'react'


const Sign = () => {
  return (
    <div className='sign-one'>
     <label name="">Email
        <input type="email" placeholder="Given Email" />
     </label>
     <h6>We will send you a one time sign in Link</h6>
     <a className='sign-btn' href="">Sign in with Magic Link</a> <br/>
     {/* <a className='sign-btn' href="">Switch to password</a> */}
     <h5>Or Sign In With</h5>
     <a href="https://www.google.com/"><i class="fa-brands fa-google"></i>Google</a>
    </div>
  )
}

export default Sign