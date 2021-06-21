import React,{Component} from 'react'
import Bookshelf from './shelfsBook';
import SearchPage from "./PageToSearch"
import propTypes from 'prop-types'; // ES6


class LisOftBooks extends Component {
  render() {
    const { books, shelves, onChangeShelf } = this.props;
    console.log(typeof(onChangeShelf));

    console.log(books);
    // filter books for a particular shelf
    function booksOnShelf (shelf){
      return books.filter(book => book.shelf === shelf.key)
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReadsApp</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Bookshelf key={shelf.key} shelf={shelf} books={booksOnShelf(shelf)} onChangeShelf={onChangeShelf} />
            ))}
          </div>
        </div>
        <SearchPage />
      </div>
    )
  }
}

LisOftBooks.propTypes = {
  books:propTypes.array.isRequired,
  shelves:propTypes.array.isRequired, 
  onChangeShelf:propTypes.func.isRequired
}

export default LisOftBooks
