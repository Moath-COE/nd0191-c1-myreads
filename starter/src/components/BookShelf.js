import "../App.css";
import Book from "./Book";

function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.books.map(book => {
                            return (
                                <Book 
                                    key={book.id}
                                    handle={props.handle}
                                    book={book}
                                />
                            )
                        })
                    }
                </ol>
            </div>
        </div>  
    )
}

export default BookShelf;