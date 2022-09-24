import React from 'react'
import './OrderSummary.css'
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';


function OrderSummary(props) {
    const navigate = useNavigate();
    const [OrderDetails, setOrderDetails] = React.useState({ UserId: 1, BookId: 1, AddressId: 1, Address: "", Price: "", BookQuantity: "" })
    const takeDisPrice = (event) => {
        setOrderDetails((prevState) => ({ ...prevState, Price: event.target.value }));
        console.log(OrderDetails.Price)
    }
    const OnClickOfCheckout = () => {
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
                    <div className="cartItems-title" OSBookName={props.cartitems.bookName}> {/* BookName */}
                        {props.cartitems.bookName}
                    </div>
                    <div className="cartItems-author"> {/* Author */}
                        by {props.cartitems.authorName}
                    </div>
                    <div className="cartItems-price" /* onChange={takeDisPrice} */>
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
