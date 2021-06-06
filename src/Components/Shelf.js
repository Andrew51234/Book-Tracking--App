import React, { Component } from 'react';
import Book from "./Book"
import { Link } from "react-router-dom";
class Shelf extends Component {
    render(){
        const {shelfName, books, updateShelves} = this.props;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => {
                            return(
                            <li>
                                <Book book={book} updateShelves = {updateShelves} />
                            </li>
                            )
                        })}
                    </ol>
                  </div>
                  <div className="open-search">
            <nav>
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </nav>
          </div>
                </div>
        )
    }

    
}

export default Shelf