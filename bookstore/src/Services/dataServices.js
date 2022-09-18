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
    console.log(headersConfig)
    let response = axios.get("https://localhost:44318/api/Cart/Get?userid=1",headersConfig)
    return response
}

export const getBookbyid = (obj) => {
    console.log(headersConfig)
    let response = axios.get(`https://localhost:44318/api/Book/GetBookByBookId?bookid=${obj.bookId}`,obj,headersConfig)
    return response
}