import React,{Component} from 'react'
import Mainpage from "./HPage"
import Book from './Books'
import * as BooksAPI from "../BooksAPI"
import propTypes from 'prop-types'; // ES6



class SearchBook extends Component {
  state = {
    ResultofSearch : [],
    value: ''
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ value: value });

    if (value.length > 0) {
      BooksAPI.search(value).then(books => {
        if (books.error) {
          this.setState({ ResultofSearch: [] });
        } else {
          this.setState({ ResultofSearch: books });
        }
      }).catch(this.setState({ ResultofSearch: [] }));
    }else {
      this.setState({ ResultofSearch: [] });
    }
  };

  resetSearch = () => {
    this.setState({ ResultofSearch: [] });
  }
  

  render() {
    const { books, onChangeShelf } = this.props;
    console.log(typeof(onChangeShelf));

 // add shelves that I've selected before, and add 'none' if I havn't selected them
    this.state.ResultofSearch.forEach(function(searchedBook){
      books.forEach(function(book){
        if (book.id === searchedBook.id) {
          searchedBook.shelf = book.shelf;
        }
      });
      if(!searchedBook.shelf){
        searchedBook.shelf = 'none';
      }
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Mainpage resetSearch={this.resetSearch} />
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.ResultofSearch.map(book => (
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBook.propTypes = {
  books:propTypes.array.isRequired,  
  onChangeShelf:propTypes.func.isRequired
}


export default SearchBook
