import { Link } from "react-router-dom";
import Book from "./Book";

const Shelf = ({books, updateFunc}) => {
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
                    {/* currently reading */}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Currently Reading</h2>
                      <div className="bookshelf-books">
                          <ol className="books-grid">
                            {currentlyReadingBooks.map((book) => (
                                <li key={book.id}>
                                    <Book book={book} updateBook={updateFunc} />
                                </li>
                            ))}
                          </ol>
                      </div>
                    </div>
                    {/* want to read */}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Want to Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
                          {wantToReadBooks.map((book) => (
                            <li key={book.id}>
                              <Book book={book} updateBook={updateFunc} />
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                    {/* read */}
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                          <ol className="books-grid">
                          {readBooks.map((book) => (
                              <li key={book.id}>
                                  <Book book={book} updateBook={updateFunc} />
                              </li>
                          ))}
                          </ol>
                      </div>
                    </div>
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
        </div>
      );
}

export default Shelf;