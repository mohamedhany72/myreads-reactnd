import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import Read from "./Read";
import WantToRead from "./WantToRead";

const Shelfs = ({books, updateFunc}) => {
    const wantToReadBooks = books.filter(book=> book.shelf === 'wantToRead')
    const currentlyReadingBooks = books.filter(book=> book.shelf === 'currentlyReading')
    const readBooks = books.filter(book=> book.shelf === 'read')

    return (
        <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    <CurrentlyReading books={currentlyReadingBooks} updateBook={updateFunc}/>

                    <WantToRead books={wantToReadBooks} updateBook={updateFunc}/>

                    <Read books={readBooks} updateBook={updateFunc}/>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
        </div>
      );
}

export default Shelfs;