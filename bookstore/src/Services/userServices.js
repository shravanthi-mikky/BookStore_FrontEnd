import axios from 'axios'

export const signUp = (obj) => {
    let response = axios.post('https://localhost:44318/api/User/Register',obj)
    console.log(response)
    return response
}
export const signIn = (obj) => {

    let response = axios.post('https://localhost:44318/api/User/Login',obj)
    console.log(obj)
    return response
}