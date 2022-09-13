import React from 'react'
import TextField from '@mui/material/TextField'
import OnlineShoppingPicture from '../../Assets/OnlineShoppingPicture.png'
import './SignUp.css'

function SignUp(props) {
    return (
        <div className="LoginmainContainer">
            <div className="loginContainer">
                <div className="section">
                    <div className="imgsection">
                        <div className="imgs">
                            <img src={OnlineShoppingPicture} />
                            <h2 className="headg">ONLINE BOOK SHOPPING</h2>
                        </div>
                    </div>
                    <div className="logincard">
                        <div className="lgnbtns">
                            <button className="loginbtn">LOGIN</button>
                            <button className="signinbtn">SIGNUP</button>
                        </div>
                        <div className="inputfeilds">
                            <label className="registerLabel">Full Name</label>
                            <TextField id="outlined-basic" className="registerInput" /* onChange={takeFullName} error={emailerror} helperText={emailhelper} */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Email Id</label>
                            <TextField id="outlined-basic" className="registerInput" /* onChange={takeEmail} error={emailerror} helperText={emailhelper} */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Password</label>
                            <TextField id="outlined-basic" className="registerInput" /* onChange={takePswds} error={pswderror} helperText={pswdhelper}  */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Mobile Number</label>
                            <TextField id="outlined-basic" className="registerInput" /* onChange={takeMobile} error={MobileError} helperText={pswdhelper}  */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <button className="Registerbtn" /* onClick={OnSubmit} */>SignUp</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
