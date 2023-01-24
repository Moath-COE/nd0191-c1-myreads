import "../App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI"
import Shelfs from "./Shelfs"
import SearchBar from "./SearchBar"
import { Route, Routes } from "react-router-dom"

function App() {
  
  // The function that gets the books stored from the API
  useEffect(() => {
    BooksAPI.getAll()
    .then(data => {
      setBooksLsit(data)
    })
  }, [])
  
  // The main state that holds all hte books stored in the app
  const [booksLsit, setBooksLsit] = useState([])

  //The Main function that changes the shelf of stored books
  // function changeShelf(prop, nShelf) {
  //   setBooksLsit(prev => (prev.map(book => book.id === prop.id ? {...book, shelf: nShelf} : book)))
  //   BooksAPI.update(prop, nShelf)
  // }

  // The function that adds new books to the shlef from the API
  async function changeShelf(prop, nShelf) {
    // setBooksLsit(prev => {
    //   let temp = [
    //     ...prev,
    //     prop
    //   ]
    //   temp = temp.map(book => book.id === prop.id ? {...book, shelf: nShelf} : book)
    //   BooksAPI.update(prop, nShelf)
    //   return temp
    // })
    await BooksAPI.update(prop, nShelf)
    .then(() => {
      setBooksLsit(prev => {
        let temp = prev.filter(book => book.id !== prop.id)
        if (nShelf !== "none") {
          temp = temp.concat({...prop, shelf: nShelf})
        }
        return temp
      })
    })
  }
  

  return (
    // Using React Routes to Rout Pages
    <Routes className="app">
      <Route exact path="/" element={<Shelfs booksLsit={booksLsit} changeShelf={changeShelf}/>} /> 
      <Route path="/search" element={<SearchBar handle={changeShelf} booksLsit={booksLsit}/>} /> 
    </Routes>
  );
}

export default App;
