import React, { Component } from 'react';
class Book extends Component{
   
    render(){
        const {book, updateShelves} = this.props;
        
        return(
           <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail : "https://www.dreamstime.com/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-image132482953"})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(e)=>updateShelves(book,e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors || "Unknown"}</div>
                        </div>
        )
    }


}

export default Book