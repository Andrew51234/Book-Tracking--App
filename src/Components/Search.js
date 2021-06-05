import React, {Component} from 'react';
 
class Search extends Component{

    state = {
        query: ''
    }
    updateQuery = (query) =>{
        this.setState(()=>({
            query: query.trim()
        }))
    }
     search = (query) => {
        this.props.query(query)
    }
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        )
    }
}

export default Search