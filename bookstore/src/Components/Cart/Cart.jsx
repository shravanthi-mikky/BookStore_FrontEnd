import React from 'react'
import Footer from '../Footer/Footer'
import GetCartPage from '../GetCartPage/GetCartPage'
import Header from '../Header/Header'
import './Cart.css'

function Cart() {
    const [cartitems, setcartitems] = React.useState([])


    return (
        <div>
            <Header />
            <div className="cartlist">
                <div className="getcartpage">

                    <div className="mycart">
                        <h3 className="mycarth3"> My Cart</h3>
                        <div className="selectLocation">
                            <img src="location.png" alt="location Icon not found" />
                            <h5 className="currnth">Use Current location</h5>
                        </div>
                    </div>
                    {/* {cartitems.map((item) =>
                        <GetCartPage item={item} ListenToRemove={ListenToRemove} />)
                    } */}
                    <button className="PlaceOrder">Place Order</button>

                </div>
                <div className="Addressdetais">
                    <p className="add">Address Details</p>
                </div>

                <div className="ordersummary">
                    <p className="ordersum">Order Summary </p>
                    <div className="switchorder">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
