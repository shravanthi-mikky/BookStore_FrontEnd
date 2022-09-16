import axios from 'axios'

let headersConfig = {
    headers:{
        authorization:"Bearer"+" "+localStorage.getItem("token")
    } 
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
