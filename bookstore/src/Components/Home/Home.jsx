import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllBooks, getBookbyid } from '../../Services/dataServices'
import Book from '../Book/Book'
import BookView from '../BookView/BookView'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'


function Home(props) {

    const navigate2 = useNavigate();
    const [book, setBooks] = React.useState([])
    const [bookForView, setBookForView] = React.useState([])

    const [view,setView] = React.useState(true)
    const [selectBook,setSelectBook] = React.useState("")

    /* const ListenToBookList = (data) => {
        setBooks(data);
    } */

    const ListenToBookList = () => {
        setView(false)
    } 

    const ListenToEachBook = (data) =>{
        setSelectBook(data)
    }
    const booksArray = book.map((books) => (
        <Book book={books} ListenToBookList={ListenToBookList} ListenToEachBook={ListenToEachBook} />
    ))

    /* const OnBookView = (bookForView) => {
        bookForView.bookId = 1;
        getBookbyid(bookForView).then((response) => { console.log(response);  navigate2('/BookView')  }).catch((error) => { console.log(error) })
    } */

    const getBooks = () => {
        getAllBooks().then(response => {
            console.log(response); setBooks(response.data.response);
        }).catch((error) => (console.log(error)))
    }

    React.useEffect(() => {
        getBooks()
    }, [])

    return (
        <div>
            <Header />
            <div className='bookArray' /* onClick={OnBookView} */>
                {view ? booksArray : <BookView selectBook={selectBook}/>}
                
            </div>
            <Footer />
        </div>
    )
}

export default Home
