import React from 'react'
import { DeleteCart, getCart } from '../../Services/dataServices'
import './GetCartPage.css'

function GetCartPage(props) {
    const [quantity, setQuantity] = React.useState(props.item.quantity)
    const deleteObj = { cartId:Number(props.item.cartId)}


    const showSingleCartItem = (data) => {
        console.log("singleCartItem", data)
        props.ListenToCartList()
        props.ListenToEachCartItem(data);
    }

    const incrementCounter = () => {
        setQuantity(quantity + 1)

      }

      const decrementCounter = () => {
        setQuantity(quantity - 1)
      }

    const remove = () => {
        DeleteCart(deleteObj).then((response)=> {console.log(response);alert("cart Item is deleted!");}).catch((error)=>{console.log(error);alert("Unable to delete Cart Item!")})
    }

    return (
        <div>
            <div className="aboutbookrow">
                <div className="cartbookimg">
                {/* BookId : {props.item.bookId} */}
                    <img src={props.item.bookImage} alt="" />
                </div>
                <div className="aboutbook">
                    <h3 className="abookname">{props.item.bookName}</h3>
                    <p className="abkauthor">{props.item.author}</p>
                    <div className="abookprice">
                        <h2 className="price">Rs.{props.item.discountPrice}</h2>
                        <p className="discountprice">Rs.{props.item.originalPrice}</p>
                    </div>
                    {/* {!props.switchordersum && */}
                    <div className="aincrement">
                        <div className="aminus" onClick={decrementCounter}>-</div>
                        <div className="aitemss">{quantity} {/* {props.item.quantity} */}</div>
                        <div className="aplus" onClick={incrementCounter}>+</div>
                        <button className="aremove" /* id={props.item.booId}*/ onClick={remove}>Remove</button>
                    </div>
                    {/*   } */}

                </div>
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder" onClick={()=>{showSingleCartItem(props.item)}}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default GetCartPage

