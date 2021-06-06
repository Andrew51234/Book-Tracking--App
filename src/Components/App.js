import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    query : "",
    searchRes : [],
    showSearchPage: false
  }
  
 updateShelves = (book,shelf)=>{
    BooksAPI.update(book, shelf).then((books) => {
      console.log(books)
    BooksAPI.getAll().then((books) => {
    this.setState({
     AllBooks: books
    });
    this.reShelf(this.state.AllBooks);

    });
    });
  }


  reShelf = (books) => {
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
  }
  
    handleChange = (e) => {
      if(e.target.value.length>0){
        this.setState({query: e.target.value})
        e.preventDefault()
        this.searching(this.state.query)    
      }
    }
   searching=(query)=>{
    BooksAPI.search(query).then(res=>{
    })
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
          <Router>
              <Switch>
                 <Route exact path ="/">
                  <Shelf shelfName ="Currently Reading" books={this.state.currentlyReading} updateShelves ={this.updateShelves}/>
                  <Shelf shelfName ="Want to Read" books={this.state.wantToRead} updateShelves ={this.updateShelves}/>
                  <Shelf shelfName ="Read" books={this.state.read} updateShelves ={this.updateShelves}/>
                 </Route>

                  <Route path ="/search">
                   <Search
                key="Search"
                search={this.searching}
                reshelf={this.updateShelves}
                allbooks={this.state.AllBooks}
                   />
                  </Route>
              </Switch>
            </Router>  
      </div>
    )
  }
}

export default BooksApp