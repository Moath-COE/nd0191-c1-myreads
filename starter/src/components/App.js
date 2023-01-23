import "../App.css";
import { useEffect, useState } from "react";
import BookShelf from "./BookShelf";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book"

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    BooksAPI.getAll()
    .then(data => {
      setBooksLsit(data)
      console.log(data)
    })
  }, [])


  const [booksLsit, setBooksLsit] = useState([])

  function changeShelf(prop, nShelf) {
    setBooksLsit(prev => (prev.map(book => book.id === prop.id ? {...book, shelf: nShelf} : book)))
    BooksAPI.update(prop, nShelf)
  }

  function addBook(prop, nShelf) {
    setBooksLsit(prev => {
      let temp = [
        ...prev,
        prop
      ]
      temp = temp.map(book => book.id === prop.id ? {...book, shelf: nShelf} : book)
      BooksAPI.update(prop, nShelf)
      return temp
    })
  }

  const currentlyReading = booksLsit.filter(book => book.shelf === "currentlyReading")
  const wantToRead = booksLsit.filter(book => book.shelf === "wantToRead")
  const read = booksLsit.filter(book => book.shelf === "read")

  const [searchData, setSearchData] = useState("")
  const [receved, setReceved] = useState([])

  function searchQuery(e) {
    setSearchData(e.target.value)
    console.log(searchData)
  }

  useEffect(() => {
    let active = true

    if (searchData !== "") {
      BooksAPI.search(searchData, 7)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        } else {
          if (active) {
            setReceved(data)
          }
        }
      })
    }

    return () => {
      active = false
      setReceved([])
    }
  }, [searchData])

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <form>
                <input
                type="text"
                placeholder="Search by title, author, or ISBNe"
                onChange={searchQuery}
                value={searchData}
            />
              </form>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {
                receved.map(book => (
                  <Book 
                      key={book.id}
                      handle={addBook}
                      book={book}
                  />
                ))
              }
            </ol>
          </div>
        </div>
      ) : (
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
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
