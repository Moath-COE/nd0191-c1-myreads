import "../App.css";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom"

function Shelfs({changeShelf, booksLsit}) {

    // Lists of Books for each Shelf
    const currentlyReading = booksLsit.filter(book => book.shelf === "currentlyReading")
    const wantToRead = booksLsit.filter(book => book.shelf === "wantToRead")
    const read = booksLsit.filter(book => book.shelf === "read")    

    return (
    <div className="list-books">
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
        <div className="list-books-content">

            <BookShelf 
            key="1"
            title="Currently Reading"
            books={currentlyReading}
            handle={changeShelf} 
            />

            <BookShelf 
            key="2"
            title="Want to Read"
            books={wantToRead} 
            handle={changeShelf} 
            />

            <BookShelf 
            key="3"
            title="Read"
            books={read} 
            handle={changeShelf} 
            />

        </div>
        <div className="open-search">
            <Link to="/search">Add a book</Link>
        </div>
    </div>
    )
}

export default Shelfs;