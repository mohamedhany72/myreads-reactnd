import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Shelfs from "./Shelfs";
import Search from "./Search";
import PageNotFoundElement from "./PageNotFoundElement";
import * as BooksAPI from '../utils/BooksAPI'

import "../css/App.css";

function App() {
  
  const [books, setBooks] = useState([]);

  useEffect(()=>{

    const getBooks = async ()=>{
      const res = await BooksAPI.getAll()
      // console.log(res)
      setBooks(res)
    }
    getBooks()
    return () => {
      setBooks([]);
    }
  }, [])

  // update the book
  const changeShelf = (book, shelf)=>{
    const changIt = async ()=>{
      const filteredBooks = books.filter(b=>b.id !== book.id)
      book.shelf = shelf
      setBooks([...filteredBooks, book]) 
      await BooksAPI.update(book, shelf)
    }
    changIt()
  }
///
  return (
    <Routes>
      <Route exact path="/" element={<Shelfs books={books} updateFunc={changeShelf}/>}/>
      <Route path="/search" element={<Search books={books} updateFunc={changeShelf}/>}/>
      <Route path="/*" element={<PageNotFoundElement />}/>
    </Routes>
  )
  
}

export default App;
