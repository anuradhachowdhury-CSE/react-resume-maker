import React from 'react'
import images from '../component/image'

const Register = () => {
    return (
        
            <div className="register-one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                          <img src={images.img3} alt="" />
                        </div>
                        <div className="col-md-6">
                           <form>
                                <label name="" >Name
                                <input type="text" placeholder='Given Name'></input></label>
                                <label name="" >Family Name
                                <input type="text" placeholder='Family Name'></input></label>
                                <label name="" >Email
                                <input type="text" placeholder='Given Email'></input></label>
                               <br/>
                               {/* <input type="checkbox" name="" id="" /><h6>I consent to the Terms & Privacy Policy.</h6> */}
                               <label name="text">
                                <input className='m-2' type="checkbox"  />I consent to the Terms & Privacy Policy.</label>
                               <br/>
                               <a href="" className='register-btn'>Register Now</a>
                               </form>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}

export default Register