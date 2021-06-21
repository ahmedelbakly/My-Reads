import React,{Component} from 'react'
import './App.css'
import LisOftBooks from './components/booksList'
import { Route } from 'react-router-dom'
import * as BooksAPI from "./BooksAPI"
import SearchBook from "./components/BookSearch"
import './App.css'


//creat BookApp component
class BooksApp extends Component {
  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelves = [
    {key:'currentlyReading' , name: 'Currently Reading'},
    {key:'wantToRead' , name: 'Want to Read'},
    {key:'read' , name: 'Read'},
  ]

  Change = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      if(book.shelf === 'none' && shelf !== 'none'){
        this.setState(state => {
          const newBooks = state.books.concat(book);
          return {books: newBooks}
        })
      }

      const setStateBooks = this.state.books.map(m => {
        if (m.id === book.id) {
          m.shelf = shelf
        }
        return m;
      });

      this.setState({

        books: setStateBooks,

      });
      //deleting the book when none shelf is chosen.
        if(shelf === 'none'){
          this.setState(state=>{
            //create const createBook to add new book after delete book
            const createBooks = state.books.filter(deleteBook => deleteBook.id !== book.id);

            return {books: createBooks}
            
          })
        }
    });
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path='/search'
        render={() => (
          <SearchBook books={books} onChangeShelf={this.Change} />
        )}
        />

        <Route exact path='/'
        render={() => (
          <LisOftBooks books={books} shelves={this.shelves} onChangeShelf={this.Change} />
        )}
        />
      </div>
    )
  }
}


export default BooksApp
