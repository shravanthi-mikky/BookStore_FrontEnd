import React from 'react'
import './ForgotPassword.css'

function ForgotPassword() {
    return (
        <div className='forgotPasswordMainDiv'>
            <div className='forgotPasswordSecondDiv'>
                <div className='BookImagePart1'>
                    <img className='imageOfBookStore' src='WhiteBookImage.png' width='30' />
                    <p className='paraOfBookStore'>Bookstore</p>
                </div>
                <p className='TextOfFP'>Forgot your Password?</p>

                <div className='userDetails'>
                    <div className='t1'>
                        <div className='t1text'>
                            <p>Enter your email address and we'll send you a link to reset your password.</p>
                        </div>
                        <label style={{ width: "30%", height: "12%",/*  marginRight: "60%", */ fontSize: 'medium' }}>Email Id</label>
                        <input style={{ width: "90%", height: "14%" }} />
                        <button>Reset Password</button>
                    </div>
                    <div className='t2'>
                        <button>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForgotPassword
