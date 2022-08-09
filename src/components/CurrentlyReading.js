import Book from "./Book";
const CurrentlyReading = ({books, updateBook}) => {
    
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
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

export default CurrentlyReading;