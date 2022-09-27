import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './BookView.css'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { addFeedBack, addtoCart, addtoWishList } from '../../Services/dataServices';

function BookView(props) {

    const [rating1, setRating1] = React.useState(Number(props.selectBook.rating))
    const [feedbackObj,setFeedbackObj] = React.useState({userId:1 ,bookId:Number(props.selectBook.bookId) , comments:"", ratings:Number(props.selectBook.rating) })

    const takeComment = (event) => {
        setFeedbackObj((prevState) => ({ ...prevState, comments: event.target.value }));
      };


      /* const takeUserId = (event) => {
        setFeedbackObj((prevState) => ({ ...prevState, userId: event.target.value }));
      };

      const takeBookId = (event) => {
        setFeedbackObj((prevState) => ({ ...prevState, bookId: event.target.value }));
      };
 */
      const takeRating = (event) => {
        setFeedbackObj((prevState) => ({ ...prevState, rating: event.target.value }));
      };
    const [view1, setView1] = React.useState(true)
    const [view2, setView2] = React.useState(true)
    const [view3, setView3] = React.useState(true)
    const [view4, setView4] = React.useState(true)
    const [view5, setView5] = React.useState(true)

    const RatingOne = () => {
        setView1(false)
        setRating1(1)
    }

    const RatingTwo = () => {
        setView1(false)
        setView2(false)
        setRating1(2)
    }

    const RatingThree = () => {
        setView1(false)
        setView2(false)
        setView3(false)
        setRating1(3)
    }
    const RatingFour = () => {
        setView1(false)
        setView2(false)
        setView3(false)
        setView4(false)
        setRating1(4)
    }
    const RatingFive = () => {
        setView1(false)
        setView2(false)
        setView3(false)
        setView4(false)
        setView5(false)
        setRating1(5)
    }

    const cartObj = { userId: 1, bookId: Number(props.selectBook.bookId), quantity: Number(props.selectBook.bookCount) }
    const WishLObj = { userId: 1, bookId: Number(props.selectBook.bookId) }

    const addToCart = () => {
        addtoCart(cartObj)
        alert("Book addded to Cart")
    }

    const addToWishlist = () => {
        addtoWishList(WishLObj)
        alert("Book added to WishList")
    }

    const AddingFeedback = () => {
        addFeedBack(feedbackObj).then((response) => {console.log(response);alert("Feedback is added!")}).catch((error) => {console.log(error);alert("Unable to add feedback!")})
        
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
                        <button className="wishlist" style={{ backgroundColor: "#A03037" }} onClick={addToCart}>ADD TO BAG</button>
                        <button className="wishlist" onClick={addToWishlist}>WISHLIST</button>
                    </div>
                </div>
                <div className="bkname">
                    <h2 className="bknme">{props.selectBook.bookName}</h2>
                    <p className="athrname"> by {props.selectBook.authorName}</p>
                    <div className="rtng">
                        <button className="rtngbtn" onChange={takeRating} id={rating1}>{rating1}*</button>
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
                        <p className="overallratingpara">OverallRating</p>
                        <div className="star">
                            {view1 ?
                                <span style={{ fontSize: "20px", marginRight: "15px" }} onClick={RatingOne}>&#9734;</span>
                                : <span style={{ fontSize: "20px", marginRight: "15px" }}>⭐</span>}

                            {view2 ?
                                <span style={{ fontSize: "20px", marginRight: "15px" }} onClick={RatingTwo}>&#9734;</span>
                                : <span style={{ fontSize: "20px", marginRight: "15px" }}>⭐</span>}

                            {view3 ?
                                <span style={{ fontSize: "20px", marginRight: "15px" }} onClick={RatingThree}>&#9734;</span>
                                : <span style={{ fontSize: "20px", marginRight: "15px" }}>⭐</span>}

                            {view4 ?
                                <span style={{ fontSize: "20px", marginRight: "15px" }} onClick={RatingFour}>&#9734;</span>
                                : <span style={{ fontSize: "20px", marginRight: "15px" }}>⭐</span>}

                            {view5 ?
                                <span style={{ fontSize: "20px", marginRight: "15px" }} onClick={RatingFive}>&#9734;</span>
                                : <span style={{ fontSize: "20px", marginRight: "15px" }}>⭐</span>}

                        </div>
                        <input type="text" /* name={feedbackObj.comment} */id="comment1" name="comment1" /* value={comment1} */ onChange={takeComment} className="reviewinput"  placeholder="Write your Review" />

                        <button className="submits" onClick={AddingFeedback}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView
