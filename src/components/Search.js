import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../utils/BooksAPI'
import Book from "./Book";
const Search = ({books, updateFunc}) => {
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  const changeQuery = (e) => {
    const nQuery = e.target.value;
    setQuery(nQuery);

    updateSearchBooks(nQuery.trim());
  };

  const updateSearchBooks = (q) => {
    
    if(q.length === 0 ){
      setSearchBooks([])
    } else {
      BooksAPI.search(q, 20)
      .then((res)=>{
        if(res.error){
          setSearchBooks([])
        } else {
          // update shelf property for each book to be none
          // check if any book from our shelfs are within the searched books, if so, 
          // change the shelf for that book
          // update searched books state
          // const booksIds = books.map(book=>book.id)
          res.forEach(book => {
            let b = books.find(b=>b.id === book.id);
            b
            ? (book.shelf = b.shelf)
            : book.shelf = 'none';

            // some books don't have thumbnails, so add this property and adjust it to null
            if(!book.imageLinks){
              book.imageLinks = {thumbnail:""};
          }

          });
          // console.log(res);
          setSearchBooks(res);
        }
      })
    }
  };


    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search" >Close</Link>

            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={changeQuery}
              />
            </div>

          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchBooks.map(book => (
                <li key={book.id}>
                <Book book={book} updateBook={updateFunc}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
    )
}

export default Search;