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
    query: "",
    showSearchPage: false
  }
 /*  updateShelves = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.setState({
        AllBooks: books
      })
      this.reShelf()
    })
  }

  reShelf = () => {BooksAPI.getAll().then((books)=>{
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
  } */
 
  componentDidMount() {
   console.log(this)
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
         <Search query = {this.query}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <Shelf shelfName ="Currently Reading" books={this.state.currentlyReading} update ={this.updateShelves}/>
                  <Shelf shelfName ="Want to Read" books={this.state.wantToRead} update ={this.updateShelves}/>
                  <Shelf shelfName ="Read" books={this.state.read} update ={this.updateShelves}/>
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