import React from 'react'
import Header from '../Header/Header'
import './WishList.css'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DeleteWishList, DeleteWishList1 } from '../../Services/dataServices';


function WishList(props) {
  const [DeleteObj, setDeleteObj] = React.useState({ wishListId: 1, userId: 1 })

  const OnClickDelete = () => {
    DeleteWishList1().then((response) => { console.log(response) }).catch((error) => { console.log(error) })
  }
  return (
    <div className="wishlistContainer">
      
      <div className="secondSection-wishlist">
        
        <div className="secondSection-displayMyWishlist">
          <div className="wishlistBookData">
            <div className="wishListBookData-Image">
              <img src={props.item.bookImage} alt="" className="wishlist-bookImage" />
            </div>
            <div className="wishlistBookData-text">
              <div className="wishlistBookData-text1">
                <div className="wishlistBook-title">{/* {book.name} */}{props.item.bookName}</div>
                <div className="wishlistBook-author">by {/* {book.author} */}{props.item.authorName}</div>
                <div className="wishlistBook-price">Rs.{/* {book.price} */}{props.item.discountPrice}</div>
              </div>
            </div>
          </div>
          <div className="wishlistBookDeleteIcon">
            <DeleteOutlineIcon onClick={OnClickDelete} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishList
