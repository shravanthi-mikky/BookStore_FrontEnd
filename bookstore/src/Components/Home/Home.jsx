import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllBooks, getBookbyid } from '../../Services/dataServices'
import Book from '../Book/Book'
import BookView from '../BookView/BookView'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Home.css'


function Home(props) {

    const [book, setBooks] = React.useState([])
    const [searchBook, setSearchBook] = React.useState('')

    const [view, setView] = React.useState(true)
    const [selectBook, setSelectBook] = React.useState("")

    const ListenToBookList = () => {
        setView(false)
    }

    const ListenToEachBook = (data) => {
        setSelectBook(data)
    }
    const booksArray = book.map((books) => (
        <Book book={books} ListenToBookList={ListenToBookList} ListenToEachBook={ListenToEachBook} />
    ))

    /*  const getBooks = () => {
         getAllBooks().then(response => {
             console.log(response); setBooks(response.data.response);
         }).catch((error) => (console.log(error)))
     } */

    React.useEffect(() => {
        displayBooks();
    }, [searchBook])

    const displayBooks = () => {

        getAllBooks().then((response) => {
            console.log(response);
            if (searchBook) {
                let filterbooks = response.data.response.filter(books => books.bookName.toLowerCase().includes(searchBook.toLowerCase()))
                setBooks(filterbooks)
            }
            else {
                setBooks(response.data.response)

            }
        }).catch((error) => {
            console.log(error);
        })

    }
    const showSearchedBooks = (string) => {
        setSearchBook(string)
    }

    return (
        <div>
            <Header showSearchedBooks={showSearchedBooks} />
            <div className='BooksHeading'>
                <h3>Books </h3><p className='TenItems'>(9 Items)</p>
            </div>
            <div className='bookArray'>
                {view ? booksArray : <BookView selectBook={selectBook} />}
            </div>
            <Footer />
        </div>
    )
}

export default Home
