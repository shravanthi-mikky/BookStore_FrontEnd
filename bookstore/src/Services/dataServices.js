import axios from 'axios'

let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
    } 
}

export const Forgot = (obj) => {
    let response = axios.post(`https://localhost:44318/api/User/ForgetPassword?email=${obj.email}`,obj)
    return response
}

//https://localhost:44318/api/User/Reset?email=xyz%40gmail.com&newpassword=abc&confirmpassword=pqr



export const Reset = (obj) => {
    let response = axios.post(`https://localhost:44318/api/User/Reset?email=${obj.email}&newpassword=${obj.newpassword}&confirmpassword=${obj.confirmpassword}`,obj,headersConfig)
    return response
}

export const getAllBooks = () => {
    console.log(headersConfig)
    let response = axios.get("https://localhost:44318/api/Book/Get",headersConfig)
    return response
}

export const getCart = () => {
    /* console.log(headersConfig) */
    let response = axios.get("https://localhost:44318/api/Cart/GetAllCartItems",headersConfig)
    return response
}

//not used
export const getBookbyid = (obj) => {
    console.log(headersConfig)
    let response = axios.get(`https://localhost:44318/api/Book/GetBookByBookId?bookid=${obj.bookId}`,obj,headersConfig)
    return response
}


export const addtoCart = (obj) => {
    /* console.log(headersConfig) */
    let response = axios.post("https://localhost:44318/api/Cart/Add",obj,headersConfig)
    return response
}

export const addtoWishList = (obj) => {
    let response = axios.post("https://localhost:44318/WishList/AddWishList",obj,headersConfig)
    return response
}


export const getAllWishList = () => {
    /* console.log(headersConfig) */
    let response = axios.get("https://localhost:44318/WishList/GetWishList",headersConfig)
    return response
}

//not used
export const DeleteWishList = (obj) => {
    /* console.log(headersConfig) */
    let response = axios.delete(`https://localhost:44318/WishList/DeleteWishList?WishListId=${obj.wishListId}&UserId=${obj.userId}`,obj,headersConfig)
    return response
}

export const DeleteWishList1 = () => {
    /* console.log(headersConfig) */
    let response = axios.delete("https://localhost:44318/WishList/DeleteWishList1",headersConfig)
    return response
}

//https://localhost:44318/api/Order/Add

export const addToOrders = (obj) => {
    let response = axios.post("https://localhost:44318/api/Order/Add",obj,headersConfig)
    return response
}

//https://localhost:44318/Feedback/Add

export const addFeedBack = (obj) => {
    let response = axios.post("https://localhost:44318/Feedback/Add",obj,headersConfig)
    return response
}