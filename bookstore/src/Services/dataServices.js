import axios from 'axios'

let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
    } 
}

export const Forgot = () => {
    let response = axios.post("https://localhost:44318/api/User/ForgetPassword",headersConfig)
    return response
}

export const Reset = (obj) => {
    let response = axios.post("https://localhost:44318/api/User/Reset",obj,headersConfig)
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