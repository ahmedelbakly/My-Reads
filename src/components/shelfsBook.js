import React,{Component} from 'react'
import propTypes from 'prop-types';
import Book from "./Books"

class Bookshelf extends Component {
  render() {
    const { shelf, books, onChangeShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}


Bookshelf.propTypes = {
  shelf: propTypes.object, 
  books: propTypes.array, 
  onChangeShelf:propTypes.func

}



export default Bookshelf
