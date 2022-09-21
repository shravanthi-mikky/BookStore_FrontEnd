import React from 'react'
import CustomerDetails from '../CustomerDetails/CustomerDetails'
import Footer from '../Footer/Footer'
import GetCartPage from '../GetCartPage/GetCartPage'
import Header from '../Header/Header'
import OrderSummary from '../OrderSummary/OrderSummary'
import './Cart.css'
import { getCart } from '../../Services/dataServices'


function Cart() {
    const [cartitems, setcartitems] = React.useState([])
    const [view, setView] = React.useState(true);
    const [view1, setView1] = React.useState(true);
    const [addCart, setAddCart] = React.useState([])

    const GetCartItem = () => {
        getCart()
            .then((response) => {
                console.log(response)
                /* let filter = []
                filter = response.data.data.filter(function (book) {
                    if (props.cart.bookId.cartId === book.bookId.cartId)
                        setQuantity(book.Book_Quantity)
                    return book
                }) */
                setAddCart(response.data.response)
                console.log("CartItems from Set Cart", addCart)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    React.useEffect(() => {
        GetCartItem()
    }, [])


    const onAddressClick = () => {
        setView(false)
    }

    const OrderClick = () => {
        setView1(false)
    }

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
                    {addCart.map((item) =>
                        <GetCartPage item={item} /* ListenToRemove={ListenToRemove} */ />)
                    }
                    {/* <button className="PlaceOrder">Place Order</button> */}
                </div>


                {view ?
                    <div className="Addressdetais">
                        <p className="add" onClick={onAddressClick} >Address Details</p>
                    </div>
                    : <CustomerDetails />}
                {/*<p className="add">Address Details</p>*/}

                {view1 ?
                    <div className="ordersummary">
                    <p className="ordersum" onClick={OrderClick} >Order Summary </p>
                </div>
                    : <OrderSummary/>}
            </div>
            <Footer />
        </div>
    )
}

export default Cart
