import React from 'react'
import * as BooksAPI from '../API/BooksAPI'
import '../Styles/App.css'
import Shelf from "./Shelf"
import Search from "./Search"

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    AllBooks : [],
    currentlyReading : [],
    wantToRead : [],
    read : [],
    showSearchPage: false
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books)=>{
    let current = []
    let want = []
    let done = []
    books.map((book) => {
      if (book.shelf === "currentlyReading")
        current.push(book)
      if (book.shelf === "wantToRead")
        want.push(book)
      if (book.shelf === "read")
        done.push(book)
    });
      this.setState({
        AllBooks : books,
        currentlyReading : current,
        wantToRead : want,
        read : done
      })
    })
  }

  render() {

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Shelf shelfName ="Currently Reading" books={this.state.currentlyReading}/>
                  <Shelf shelfName ="Want to Read" books={this.state.wantToRead}/>
                  <Shelf shelfName ="Read" books={this.state.read}/>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp