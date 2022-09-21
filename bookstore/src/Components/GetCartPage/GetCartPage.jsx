import React from 'react'
import { getCart } from '../../Services/dataServices'
import './GetCartPage.css'

function GetCartPage(props) {

    const [updateqnty, setupdateqnty] = React.useState(/* props.item.quantityToBuy */)
    const [testarray, settestarray] = React.useState([])
    const [quantity, setQuantity] = React.useState(/* props.cart.Book_Quantity */)
    /* 
    const increment = (e) => {
        console.log("incremntvalue", e.target.id)
        let Cartidobj = {
            //    id : props.item.product_id._id ,
            id: e.target.id,
            quantityToBuy: props.item.quantityToBuy + 1
            //  quantityToBuy : updateqnty + 1
        }
        Putcartitem(Cartidobj).then((response) => {
            console.log(response)
            getcartitems()
    
        }).catch((error) => {
            console.log(error)
        })
    } */
    /* const decrement = (e) => {
        let Cartidobj = {
            // id : props.item.product_id._id,
            id: e.target.id,
            quantityToBuy: props.item.quantityToBuy - 1
        }
        Putcartitem(Cartidobj).then((response) => {
            console.log(response)
            getcartitems()
    
        }).catch((error) => {
            console.log(error)
        })
    
    } */

    /* const remove = (e) => {
        Deletecartitem(e.target.id).then((response) => {
            console.log(response)
            props.ListenToRemove(true)
            // getcartitems()
        }).catch((error) => {
            console.log(error)
        })
    
    } */
    return (
        <div>
            <div className="aboutbookrow">
                <div className="cartbookimg">
                    <img src="image1.png" alt="" />
                </div>
                <div className="aboutbook">
                    <h3 className="abookname">{/* {props.item.product_id.bookName} */}BookName</h3>
                    <p className="abkauthor">{/* {props.item.product_id.author} */}author</p>
                    <div className="abookprice">
                        <h2 className="price">Rs.{/* {props.item.product_id.discountPrice} */}ori</h2>
                        <p className="discountprice">Rs.{/* {props.item.product_id.originalPrice} */}Dis</p>
                    </div>
                    {/* {!props.switchordersum && */}
                    <div className="aincrement">
                        <div className="aminus" /* id={props.item._id} onClick={decrement} */>-</div>
                        <div className="aitemss">{quantity} {props.item.quantity}</div>
                        <div className="aplus" /* id={props.item._id} onClick={increment} */>+</div>
                        <button className="aremove" /* id={props.item._id} onClick={remove} */>Remove</button>
                    </div>
                    {/*   } */}

                </div>
                <div className='PlaceOrderDiv'>
                    <button className="PlaceOrder">Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default GetCartPage

