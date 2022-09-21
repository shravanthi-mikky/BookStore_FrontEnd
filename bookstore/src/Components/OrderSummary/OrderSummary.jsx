import React from 'react'
import './OrderSummary.css'
import Button from '@mui/material/Button';


function OrderSummary() {
  return (
    <div className='orderSummery-container'>
        <div className="orderSummery-text">
            Order Summery
        </div>
        <div className="orderSummery-orderData">
            <div className="orderItem-image">
                <img src="image1.png" alt="" className='orderItem-image-img' />
            </div>
            <div className="orderData">
                <div className="cartItems-title"> BookName
                    {/* {props.cartedOrderSummery.name} */}
                </div>
                <div className="cartItems-author"> Author
                    by {/* {props.cartedOrderSummery.author} */}
                </div>
                <div className="cartItems-price">
                    Rs. 1500{/* {props.cartedOrderSummery.price} */}
                </div>
            </div>
        </div>
        <div className="checkout-btn">
            <Button variant="contained" className='checkout' /* onClick={()=>{placeOrder(props.placeOrderObj)}} */>checkout</Button>
        </div>
    </div>
  )
}

export default OrderSummary
