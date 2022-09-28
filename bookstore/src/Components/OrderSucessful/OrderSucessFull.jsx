import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './orderSucessful.css'

function OrderSucessFull() {
  return (
    <div className="Home">
        <div className="Home-Header">
             <div className="head-container">
                 <Header/>
             </div>
             
        </div>
        <div className="ordersuccess">
            <div className="orderplaced">
                <img src="Orderplacedsuccessfully.png" alt="not found"/>
            
            </div>
            <p className="orderpara">
                hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                </p>
        </div>
        <div className="tabledata">
                <table>
                        <tbody>
                        <tr>
                            <th colSpan="1">Email Us</th>
                            <th colSpan="1">Contact Us</th>
                            <th colSpan="3">Address</th>
                        </tr>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 8163475881</td>
                            <td>42, 14th Main, 15th Cross,Bangalore 560034</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
                <Link to="/">
                <button className="checkout">Continue Shopping</button>
                </Link>
       <Footer/>
    </div>
  )
}

export default OrderSucessFull
