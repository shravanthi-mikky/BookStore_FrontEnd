import React from 'react'
import CustomerDetails from '../CustomerDetails/CustomerDetails'
import Footer from '../Footer/Footer'
import GetCartPage from '../GetCartPage/GetCartPage'
import Header from '../Header/Header'
import OrderSummary from '../OrderSummary/OrderSummary'
import './Cart.css'
import { getCart } from '../../Services/dataServices'
import InCartItem from '../InCartItem/InCartItem'


function Cart() {
    const [view2, setView2] = React.useState(true)
    const [cartitems, setcartitems] = React.useState([])
    const [view, setView] = React.useState(true);
    const [view1, setView1] = React.useState(true);
    const [addCart, setAddCart] = React.useState([])

    const GetCartItem = () => {
        getCart()
            .then((response) => {
                console.log(response)
                setAddCart(response.data.response)
                console.log("CartItems from Set Cart", addCart)
                console.log(response.data.response.cartId)
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

    const ListenToCartList = () => {
        setView2(false)
    }
    const ListenToEachCartItem = (data) => {
        setcartitems(data)
    }

    const CartArray = addCart.map((item) =>
    (<GetCartPage item={item} ListenToCartList={ListenToCartList} ListenToEachCartItem={ListenToEachCartItem}/>))

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
                    {
                        view2 ? 
                        CartArray : 
                        <InCartItem cartitems={cartitems}/>
                        
                    }

                    {/* {CartArray} */}
                    
                </div>

                {view ?
                    <div className="Addressdetais">
                        <p className="add" onClick={onAddressClick} >Address Details</p>
                    </div>
                    : <CustomerDetails />}

                {view1 ?
                    <div className="ordersummary">
                        <p className="ordersum" onClick={OrderClick} >Order Summary </p>
                    </div>
                    : <OrderSummary cartitems={cartitems}/>}
            </div>
            <Footer />
        </div>
    )
}

export default Cart
