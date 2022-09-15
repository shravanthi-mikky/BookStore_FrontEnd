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