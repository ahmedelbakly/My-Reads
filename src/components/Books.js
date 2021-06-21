import React from 'react'
import Setbook from "./Setbooks"
import propTypes from 'prop-types'; // ES6

function Book( props) {
  
    const { book, onChangeShelf } = props;
    console.log(typeof(book));

    return (
      <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})` }}></div>
              <Setbook book={book} onChangeShelf={onChangeShelf} />
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
          </div>
      </li>
    )
  }

  Book.propTypes = {
    book:propTypes.object.isRequired, 
    onChangeShelf:propTypes.func.isRequired
  }

export default Book
