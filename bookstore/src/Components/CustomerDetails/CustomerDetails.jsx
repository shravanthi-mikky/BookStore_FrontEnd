import React from 'react'
import './CustomerDetails.css'

function CustomerDetails() {
    const obj = { name : "Shravanthi",mobileNumber:1234567890}
    
    const AddAddressMethod =() => {
        
    }
    return (
        <div className='CustDetailsMainDiv'>
            <div className='custSecond'>
                <div className='headingOfCust'>
                    <h3>Customer Details</h3>
                    {/* <button>Add Address</button> */}
                </div>
                <div className='MiddleOfCust'>
                    <div className='fullnameMobileOfCust'>
                        <div className='fullnamediv'>
                            <label className='LabelfnameOfCust'>Full Name</label>
                            <input className='inputfnameOfCust' placeholder='Enter your Name' /* Value={obj.name} *//>
                        </div>
                        <div className='mobilediv'>
                            <label className='LabelMobileOfCust'>Mobile Number</label>
                            <input className='inputMobileCust' placeholder='Enter your Number' /* value={obj.mobileNumber} */ />
                        </div>
                    </div>
                    <div className='addressOfCust'>
                        <label className='LabelMobileOfCust'>Address</label>
                        <textarea className='addressTextCust'></textarea>

                    </div>
                    <div className='fullnameMobileOfCust'>
                        <div className='fullnamediv'>
                            <label className='LabelfnameOfCust'>City/Town</label>
                            <input className='inputfnameOfCust' placeholder='Enter your City / Town' />
                        </div>
                        <div className='mobilediv'>
                            <label className='LabelMobileOfCust'>State</label>
                            <input className='inputMobileCust' placeholder='Enter your State' />
                        </div>
                    </div>
                    <div className='RadioButtonsOfCust'>
                        <div className=''>
                            <label>Type</label>
                        </div>
                        <div className='ChooseRadioPart'>
                            <div className='radioPart'>
                                <input type="radio" className='' name="locatn" value="1" />
                                <label >Home</label>
                            </div>
                            <div className='radioPart'>
                                <input type="radio" className='' name="locatn" value="2" />
                                <label >Work</label>
                            </div>
                            <div className='radioPart'> 
                                <input type="radio" className='' name="locatn" value="3" />
                                <label >others</label>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='BottomOfCust'>
                    <button className='buttonContinues' onClick={AddAddressMethod}>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerDetails
