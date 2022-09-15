import React from 'react'
import { getAllBooks } from '../../Services/dataServices'
import Book from '../Book/Book'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'


function Home() {
    const [book,setBooks] = React.useState([])
    const booksArray = book.map((books) => (
        <Book book={books}/>
    ))

    const getBooks = () =>
    {
        getAllBooks().then(response=>{ 
            console.log(response);setBooks(response.data.response);}).catch((error)=>(console.log(error)))
    }

    React.useEffect(()=>{
        getBooks()
    },[])
    return (
        <div>
            <Header />
            <div className='bookArray'> 
                {booksArray}
            </div>
            <Footer />
        </div>
    )
}

export default Home
