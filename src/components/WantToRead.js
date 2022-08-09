import Book from "./Book";

const WantToRead = ({books, updateBook}) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book book={book} updateBook={updateBook} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
}

export default WantToRead;