import React from 'react'
import TextField from '@mui/material/TextField'
import OnlineShoppingPicture from '../../Assets/OnlineShoppingPicture.png'
import './Login.css'

const emailRegex =/^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function Login(props) {
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
                            <button className="signinbtn" /* onClick={changeSignUp} */>SIGNUP</button>
                        </div>
                        <div className="inputfeilds">
                            <label className="emailid">Email Id</label>
                            <TextField id="outlined-basic" className="emailinput" /* onChange={takeEmail} error={emailerror} helperText={emailhelper} */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            {/* <input className="emailinput" type="text" error={emailerror} helperText={emailhelper} onChange={takeEmail}/> */}
                            <label className="paswd">Password</label>
                            {/* <input className="pawdinput" type="text" error={pswderror} helperText={pswdhelper} onChange={takePswds}/> */}
                            <TextField id="outlined-basic" className="pawdinput" /* onChange={takePswds} error={pswderror} helperText={pswdhelper}  */ label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />

                            <label className="frgtpswd">Forgot Password?</label>
                            <button className="lgnbtn" /* onClick={OnSubmit} */>Login</button>

                            <label className="or">OR</label>


                        </div>
                        <div className="googlebtn">
                            <button className="google">Facebook</button>
                            <button className="facebook">Google</button>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login
