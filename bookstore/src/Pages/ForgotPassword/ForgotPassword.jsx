import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Forgot } from '../../Services/dataServices';
import './ForgotPassword.css'

function ForgotPassword() {
    const navigate = useNavigate()
    const [emailObj, setEmailObj] = React.useState({email:""})

    const takeEmail = (event) => {
        setEmailObj((prevState) => ({ ...prevState, email: event.target.value }));
      };


    const OnReset = () => {
        navigate('/ResetPassword')
        //Reset().then((response) => { console.log(response); navigate('/ResetPassword') }).catch((error) => { console.log(error) });
        Forgot(emailObj).then((response) => { console.log(response); navigate('/ResetPassword') }).catch((error) => { console.log(error) });

    
    }
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
                        <label  style={{ width: "30%", height: "12%", fontSize: 'medium' }}>Email Id</label>
                        <input onChange={takeEmail} style={{ width: "90%", height: "14%" }} />
                        <button onClick={OnReset}>Reset Password</button>
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
