import React from 'react'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import './DashBoard.css'

function DashBoard() {

    const [switchloginsignup,setswitchloginsignup] = React.useState(false)

    const ListenToSignup = (data) => {
        if(data == true){
            setswitchloginsignup(true)
        }else if(data == false){
            setswitchloginsignup(false)
        }
    }
  return (
    <div className="dashBoard-container">
                {
                    switchloginsignup ? <SignUp ListenToSignup= {ListenToSignup}/> : <Login ListenToSignup= {ListenToSignup} />
                }
            </div>
  )
}

export default DashBoard
