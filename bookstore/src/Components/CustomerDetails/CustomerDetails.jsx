import React from 'react'
import './CustomerDetails.css'

function CustomerDetails() {
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
                            <input className='inputfnameOfCust' placeholder='Enter your Name' />
                        </div>
                        <div className='mobilediv'>
                            <label className='LabelMobileOfCust'>Mobile Number</label>
                            <input className='inputMobileCust' placeholder='Enter your Number' />
                        </div>
                    </div>
                    <div className='addressOfCust'>
                        <label className='LabelMobileOfCust'>Address</label>
                        {/* <input className='addressTextCust' placeholder='Address' /> */}
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
                                <input type="radio" className='' name="locatn" value="" />
                                <label >Home</label>
                            </div>
                            <div className='radioPart'>
                                <input type="radio" className='' name="locatn" value="" />
                                <label >Work</label>
                            </div>
                            <div className='radioPart'> 
                                <input type="radio" className='' name="locatn" value="" />
                                <label >others</label>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='BottomOfCust'>
                    <button className='buttonContinues'>Continue</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerDetails
