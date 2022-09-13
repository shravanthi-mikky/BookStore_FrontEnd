import React from 'react'
import TextField from '@mui/material/TextField'
import OnlineShoppingPicture from '../../Assets/OnlineShoppingPicture.png'
import './SignUp.css'

const fullNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =/^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex =/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const mobileRegex =/^[6-9]{2}[0-9]{8}/;

function SignUp(props) {

    const [SignUpObj, setSignUpObj] = React.useState({ fullName:"", email: "", password: "", mobile:"" });
    const [regexObj, setRegExObj] = React.useState({
        fullNameBorder: false,
        emailBorder: false,
        passwordBorder: false,
        mobileBorder: false,
        fullNameHelper: "",
        emailHelper: "",
        passwordHelper: "",
        mobileHelper: "",
      });
    
      const takeFullName = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, fullName: event.target.value }));
    };
    const takeEmail = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, email: event.target.value }));
    };
    const takePassword = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, password: event.target.value }));
    };
    const takeMobile = (event) => {
        setSignUpObj((prevState) => ({ ...prevState, mobile: event.target.value }));
    };


    const OnSubmit = () => {
        let fullNameTest = fullNameRegex.test(SignUpObj.fullName);
        let emailTest = emailRegex.test(SignUpObj.email);
        let passwordTest = passwordRegex.test(SignUpObj.password);
        let mobileTest = mobileRegex.test(SignUpObj.mobile);

        if (fullNameTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              fullNameBorder: true,
              fullNameHelper: "enter correct Name",
            }));
          } else if (fullNameTest === true) {
            setRegExObj((prevState) => ({
              ...prevState,
              fullNameBorder: false,
              fullNameHelper: "",
            }));
          }

        if (emailTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: true,
            emailHelper: "enter correct email",
          }));
        } else if (emailTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            emailBorder: false,
            emailHelper: "",
          }));
        }
        if (passwordTest === false) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: true,
            passwordHelper: "enter correct password",
          }));
        } else if (passwordTest === true) {
          setRegExObj((prevState) => ({
            ...prevState,
            passwordBorder: false,
            passwordHelper: "",
          }));
        }

        if (mobileTest === false) {
            setRegExObj((prevState) => ({
              ...prevState,
              mobileBorder: true,
              mobileHelper: "Enter correct Mobile Number",
            }));
          } else if (mobileTest === true) {
            setRegExObj((prevState) => ({
              ...prevState,
              mobileBorder: false,
              mobileHelper: "",
            }));
          }
    
        if (fullNameTest === true && emailTest === true && passwordTest === true && mobileTest === true) {
            console.log("hitt the server");
        }
      };

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
                            <TextField id="outlined-basic" className="registerInput"  onChange={takeFullName} error={regexObj.fullNameBorder} helperText={regexObj.fullNameHelper}  label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Email Id</label>
                            <TextField id="outlined-basic" className="registerInput"  onChange={takeEmail} error={regexObj.emailBorder} helperText={regexObj.emailhelper}  label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Password</label>
                            <TextField id="outlined-basic" className="registerInput" onChange={takePassword} error={regexObj.passwordBorder} helperText={regexObj.passwordHelper} label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <label className="registerLabel">Mobile Number</label>
                            <TextField id="outlined-basic" className="registerInput"  onChange={takeMobile} error={regexObj.mobileBorder} helperText={regexObj.mobileHelper} label="" variant="outlined" size="small" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }} />
                            <button className="Registerbtn" onClick={OnSubmit}>SignUp</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
