import React from 'react'
import { getAllWishList } from '../../Services/dataServices'
import Header from '../Header/Header'
import WishList from '../WishList/WishList'
import './WishListMain.css'

function WishListMain() {
    const [showWishList, setShowWishList] = React.useState([])

    const getAllWishListItems = () => {
        getAllWishList()
            .then((response) => {
                console.log(response)
                setShowWishList(response.data.data)
                console.log("WishList from Show WishList", showWishList)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    React.useEffect(() => {
        getAllWishListItems()
    }, [])

    const WishArray = showWishList.map((item) =>
        (<WishList item={item} />))

    return (
        <div>
            <Header />
            <div className="firstSection-wishlist-child">
                Home / <span className="MyWishlist-Bold">(My Wishlist)</span>
            </div>

            <div className="WishListArray">
                <div className="secondSection-myWishlist">My Wishlist</div>
                {WishArray}
            </div>
        </div>
    )
}

export default WishListMain
