import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI"
import Book from "./Book"
import { Link } from "react-router-dom"


function SearchBar(props) {

    // Main State that holds Searched & Receved Data
    const [searchData, setSearchData] = useState("")
    const [receved, setReceved] = useState([])

    // Function that trackes search queries
    function searchQuery(e) {
        setSearchData(e.target.value)
        console.log(searchData)
    }

    // function that gets Search result from the API
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
    <div className="search-books">
        <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
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
                        handle={props.handle}
                        book={book}
                    />
                ))
                }
            </ol>
        </div>
    </div>
    )
}

export default SearchBar;