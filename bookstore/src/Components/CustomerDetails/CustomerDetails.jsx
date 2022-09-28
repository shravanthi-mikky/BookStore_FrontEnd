import React from 'react'
import { AddAddress, getAddress } from '../../Services/dataServices';
import './CustomerDetails.css'

function CustomerDetails() {
    const obj = { name: "Shravanthi", mobileNumber: 1234567890 }

    const [addressObj, setAddressObj] = React.useState({ fullName: "", mobile: Number(), address: "", city: '', state: "" });

    const addAddress = {
        address: addressObj.address,
        city: addressObj.city,
        state: addressObj.state,
        userId: 1,
        type: 1
    }

    const AddAddressMethod = () => {
        getAddress().then(
            (response) => {
                console.log(response);
                alert("Address Details!");
                setAddressObj(response.data.response[0]);
                console.log(addressObj)
            }
        ).catch(
            (error) => {
                console.log(error);
                alert("Unable to get Address details!")
            }
        )
    }

    const OnClickOfContinue = () => {
        AddAddress(addAddress)
            .then(
                (response) => {
                    console.log(response);
                    alert("Address details added!")
                })
            .catch(
                (error) => {
                    console.log(error);
                    alert("Unable to Add Address details!")
                }
            )
    }
    return (
        <div className='CustDetailsMainDiv'>
            <div className='custSecond'>
                <div className='headingOfCust'>
                    <h3>Customer Details</h3>
                    <button onClick={AddAddressMethod} style={{ backgroundColor: "#3371B5", border: "none", borderRadius: "3px", color: "white", width: "15%" }}>Get Address</button>
                </div>
                <div className='MiddleOfCust'>
                    <div className='fullnameMobileOfCust'>
                        <div className='fullnamediv'>
                            <label className='LabelfnameOfCust'>Full Name</label>
                            <input className='inputfnameOfCust' defaultValue={addressObj.fullName} placeholder='Enter your Name' /* Value={obj.name} */ />
                        </div>
                        <div className='mobilediv'>
                            <label className='LabelMobileOfCust' >Mobile Number</label>
                            <input className='inputMobileCust' defaultValue={addressObj.mobile} placeholder='Enter your Number' /* value={obj.mobileNumber} */ />
                        </div>
                    </div>
                    <div className='addressOfCust'>
                        <label className='LabelMobileOfCust' >Address</label>
                        <textarea className='addressTextCust' defaultValue={addressObj.address}></textarea>

                    </div>
                    <div className='fullnameMobileOfCust'>
                        <div className='fullnamediv'>
                            <label className='LabelfnameOfCust'>City/Town</label>
                            <input className='inputfnameOfCust' defaultValue={addressObj.city} placeholder='Enter your City / Town' />
                        </div>
                        <div className='mobilediv'>
                            <label className='LabelMobileOfCust'>State</label>
                            <input className='inputMobileCust' defaultValue={addressObj.state} placeholder='Enter your State' />
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
                    <button className='buttonContinues' onClick={OnClickOfContinue} >Continue</button>
                </div>

            </div>
        </div>
    )
}

export default CustomerDetails
