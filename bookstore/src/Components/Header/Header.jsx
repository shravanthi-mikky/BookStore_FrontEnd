import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


function Header(props) {
    const navigate3 = useNavigate();

    const openCart = () => {
        navigate3('/Cart')
    }

    const openWishList = () => {
        navigate3('/WishListMain')
    }

    const searchBooks = (event) => {
        props.showSearchedBooks(event.target.value);
    }

    return (

        <div className='mainOfHeader'>
            <div className='headerOfMainPage'>
                <div className='BookImagePart'>
                    <img className='imageOfBookStore' src='WhiteBookImage.png' /* width='30' */ />
                    <p className='paraOfBookStore'>Bookstore</p>
                </div>
                <div className='HomePageSearch'>
                    <div className='search-icon'><SearchIcon /></div>
                    <input placeholder="Search" class='searchBar' onChange={searchBooks}></input>
                </div>
                <div className="HomePageProfileAndCartIcon">
                    <div className='pAndC'>
                        <PersonOutlineOutlinedIcon style={{ color: "white" }} />
                        <div class='dropdown'>
                            <p style={{ color: "white", fontSize: "small" }}>Profile</p>
                            <div className='dropdownContent'>

                                <a href="/">Logout</a>
                                <a href="/WishListMain">WishList</a>
                                <a href="/Cart">Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className='pAndC'>
                        <img className='cartImage' src='CartImage.png' width='20' />
                        <p style={{ color: "white", fontSize: "small" }} onClick={openCart}>
                            Cart
                        </p>
                    </div>
                    <div className='pAndC'>
                        <FavoriteOutlinedIcon style={{ color: "white" }} />
                        <p style={{ color: "white" }} onClick={openWishList} >WishList</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
