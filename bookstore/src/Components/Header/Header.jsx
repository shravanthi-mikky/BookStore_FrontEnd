import React from 'react'
import './Header.css'

function Header() {
    return (
        <div class='main'>
            <div class='header'>
                <div class='icon part-one'>
                    <img src='KeepIcon.png' width='30' />
                    <div class='keep'></div>
                </div>
                <div class='icon1 part-two'>
                    <div /* class='search-icon' */></div>
                    <input placeholder="Search" /* class='searchBar' */ ></input>
                </div>
                <div class='icon part-three'>
                </div>
                <div class='icon part-four'>
                </div>
            </div>

        </div>
    )
}

export default Header
