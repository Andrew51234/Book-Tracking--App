import React, { Component } from 'react';
import Book from "./Book"
class Shelf extends Component {
    render(){
        const {shelfName, books,update} = this.props;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return(
                            <li>
                                <Book book={book} updateShelves = {update} />
                            </li>
                            )
                        })}
                    </ol>
                  </div>
                </div>
        )
    }

    
}

export default Shelf