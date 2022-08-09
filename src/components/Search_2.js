import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../utils/BooksAPI'
import Book from "./Book";
const Search = ({updateFunc}) => {
    const [query, setQuery] = useState("")
    const [searchBooks, setSearchBooks] = useState([])

    useEffect(()=>{
      const searchBooksFunc = async (q) => {
        const ress = await BooksAPI.search(q, 20);
        // const res = await BooksAPI.getAll()
        console.log(ress)
        setSearchBooks(ress)
        // return res;
      }

      if(query !== ""){
        searchBooksFunc(query);
      }

      return (setSearchBooks([]))

    },[query])
    
    


    const changeQuery = (e) => {
      setQuery(e.target.value);
    }

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                onChange={changeQuery}
                value={query}
              />
            </div>
            <div>{query}</div>
          </div>
          <div className="search-books-results">
            {/* <div>{searchBooks}</div> */}
            <ol className="books-grid">
              { searchBooks.length &&
                searchBooks.map(book => (
                  <li key={book.id}>
                    <Book book={book} updateBook={updateFunc}/>
                  </li>
                  ))
              }
            </ol>
          </div>
        </div>
    )
}

export default Search;