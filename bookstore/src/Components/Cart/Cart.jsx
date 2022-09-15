import React from 'react'
import './Cart.css'

function Cart() {
    const [cartitems, setcartitems] = React.useState([])

    return (
        <div className="cartlist">
            <div className="getcartpage">

                <div className="mycart">
                    <h3 className="mycarth3"> My Cart</h3>
                    <div className="selectLocation">
                        <img src="location.png" alt="not found" />
                        <h5 className="currnth">Use Current location</h5>
                    </div>
                </div>
                <button className="PlaceOrder" /* onClick={handlecheckout} */>Place Order</button>

            </div>
            <div className="Addressdetais">
                <p className="add">Address Details</p>
            </div>

            <div className="ordersummary">
                <p className="ordersum">Order Summary </p>
                <div className="switchorder">
                    
                </div>
                {/* <button className="checkout" onClick={handlecheckout} >CHECKOUT</button> */}
            </div>
        </div>
    )
}

export default Cart
