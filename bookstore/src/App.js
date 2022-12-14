import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login.jsx'
import SignUp from './Pages/SignUp/SignUp';
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import Cart from './Components/Cart/Cart';
import Router from './Router/Router';
import RouterComponent from './Router/Router';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import BookView from './Components/BookView/BookView';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import GetCartPage from './Components/GetCartPage/GetCartPage';
import WishList from './Components/WishList/WishList';
import InCartItem from './Components/InCartItem/InCartItem';
import OrderSucessFull from './Components/OrderSucessful/OrderSucessFull';
import WishListMain from './Components/WishListMain/WishListMain';

function App() {
  return (
    <div>
      {/* <Login/> */}
     {/*  <SignUp/> */}
     {/* <DashBoard/> */}
     {/* <Header/> */}
      {/* <Footer/> */}
      {/* <Home/> */}
      {/* <Book/> */}
      {/* <Cart/> */}
      <RouterComponent/>
      {/* <ForgotPassword/> */}
     {/*  <BookView/> */}
      {/* <ResetPassword/> */}
      {/* <CustomerDetails/> */}
      {/* <OrderSummary/> */}
      {/* <GetCartPage/> */}
      {/* <WishList/> */}
      {/* <InCartItem/> */}
      {/* <OrderSucessFull/> */}
      {/* <WishListMain/> */}
    </div>
  );
}

export default App;
