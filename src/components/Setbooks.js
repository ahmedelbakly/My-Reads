import React from 'react'
import propTypes from 'prop-types'; // ES6


class Setbook extends React.Component {
  state = {
    value: this.props.book.shelf,
  }
handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onChangeShelf(this.props.book, event.target.value);
  }
  render() {
    return (
      <div className="book-shelf-changer">

        <select value={this.state.value} onChange={this.handleChange} >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

Setbook.propTypes ={
  book:propTypes.object, 
  onChangeShelf:propTypes.func
}

export default   Setbook
