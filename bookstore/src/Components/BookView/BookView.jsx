import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './BookView.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { addtoCart, addtoWishList } from '../../Services/dataServices';

function BookView(props) {
    
    const cartObj= {userId:1,bookId:Number(props.selectBook.bookId),quantity:Number(props.selectBook.bookCount)}
    const WishLObj = {userId:1,bookId:Number(props.selectBook.bookId)}

    const addToCart = () => {
        addtoCart(cartObj)
        alert("Book addded to Cart")
    }

    const addToWishlist = () => {
        addtoWishList(WishLObj)
        alert("Book added to WishList")
    }

    return (
        <div className="BookImage">
            <div className='MiddleOfBookView'>
                <div className="ImageCoumn">
                    <div className="imgborder">
                        <div className="bkimg">
                            <img src={props.selectBook.bookImage} />
                        </div>
                    </div>
                    <div className="CartWishlist">
                        <button className="wishlist" style={{ backgroundColor: "#A03037" }}  onClick={addToCart}>ADD TO BAG</button>
                        <button className="wishlist" onClick={addToWishlist}>WISHLIST</button>
                    </div>
                </div>
                <div className="bkname">
                    <h2 className="bknme">{props.selectBook.bookName}</h2>
                    <p className="athrname"> {props.selectBook.author}</p>
                    <div className="rtng">
                        <button className="rtngbtn">4.5*</button>
                        <p className="qnty">({props.selectBook.bookCount})</p>
                    </div>
                    <div className="prcediv">
                        <h3 className="prce">Rs.{props.selectBook.discountPrice}</h3>
                        <p className="dscntprce">Rs.{props.selectBook.originalPrice}</p>
                    </div>
                    <hr />
                    <h4 className="bookdetails">Book Details</h4>
                    <p className="para">
                        {props.selectBook.description}
                    </p>
                    <hr />
                    <h4 className="customerfeedback">Customer Feedback</h4>
                    <div className="overallrating">
                        <p className="overallratingpara">overallrating</p>
                        <div className="star">
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                            <span style={{ fontSize: "20px", marginRight: "15px" }}>&#9734;</span>
                        </div>
                        <input type="text" className="reviewinput" placeholder="write your review" />

                        {console.log(cartObj)}
                        <button className="submits">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView
