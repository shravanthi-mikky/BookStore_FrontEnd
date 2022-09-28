import React from 'react'
import './OrderSummary.css'
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { addToOrders } from '../../Services/dataServices';


function OrderSummary(props) {
    const navigate = useNavigate();
    const OrderDetails = { userId: Number(props.cartitems.userId), bookId: Number(props.cartitems.bookId), addressId: 1, price: Number(props.cartitems.discountPrice), quantity: Number(props.cartitems.quantity)/* ,orderDate:Date.now() */ }

    const OnClickOfCheckout = () => {
        //create the api call in data service
        addToOrders(OrderDetails).then((response)=>{console.log(response);}).catch((error)=>{console.log(error)})
        navigate('/OrderSucessFull')
    }

    return (
        <div className='orderSummery-container'>
            <div className="orderSummery-text">
                Order Summery
            </div>
            <div className="orderSummery-orderData">
                <div className="orderItem-image">
                    <img src={props.cartitems.bookImage} alt="" className='orderItem-image-img' />
                </div>
                <div className="orderData">
                    <div className="cartItems-title" /* osbookName={props.cartitems.bookName} */> 
                        {props.cartitems.bookName}
                    </div>
                    <div className="cartItems-author">
                        by {props.cartitems.authorName}
                    </div>
                    <div className="cartItems-price" >
                        Rs.{props.cartitems.discountPrice}
                    </div>
                </div>
            </div>
            <div className="checkout-btn">
                <Button variant="contained" className='checkout' onClick={OnClickOfCheckout}>Checkout</Button>
            </div>
        </div>
    )
}

export default OrderSummary
