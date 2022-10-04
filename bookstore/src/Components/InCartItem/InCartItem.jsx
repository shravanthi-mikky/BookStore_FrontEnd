import React from 'react'
import { DeleteCart } from '../../Services/dataServices'
import GetCartPage from '../GetCartPage/GetCartPage'
import './InCartItem.css'

function InCartItem(props) {
    const [quantity, setQuantity] = React.useState(/* props.cart.Book_Quantity */)
    const deleteObj = { cartId:Number(props.cartitems.cartId)}

    const ListenToDeleteCart = () => {
        DeleteCart(deleteObj).then((response)=> {console.log(response);alert("cart Item is deleted!");}).catch((error)=>{console.log(error);alert("Unable to delete Cart Item!")})
    }
  return (
    <div>
            <div className="aboutCartrow">
                <div className="cartbookimg">
                {/* BookId : {props.cartitems.bookId} */}
                    <img src={props.cartitems.bookImage}/* 'image2.png' */ alt="" />
                </div>
                <div className="aboutCart">
                    <h3 className="aCartname">{props.cartitems.bookName} {/* BookName */}</h3>
                    <p className="abkauthorCart">{props.cartitems.authorName}{/* Author */}</p>
                    <div className="abookpriceCart">
                        <h3 className="priceCart">Rs.{props.cartitems.discountPrice}{/* 100 */}</h3>
                        <p className="discountpriceCart">Rs.{props.cartitems.originalPrice} {/* 100 */}</p>
                    </div>
                    {/* {!props.switchordersum && */}
                    <div className="aincrementCart">
                        <div className="aitemssCart">{/* {quantity} */} {props.cartitems.quantity}</div>
                        <button className="aremoveCart" onClick={ListenToDeleteCart}>Remove</button>
                    </div>
                    {/*   } */}

                </div>
                {/* <div className='PlaceOrderDivCart'>
                    <button className="PlaceOrderCart">Place Order</button>
                </div> */}
            </div>
        </div>
  )
}

export default InCartItem
