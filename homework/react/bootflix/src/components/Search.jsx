import React, { Component } from 'react';


// Update the forms to utilize methods being passed down from App.js
const Search = (props) => {

  const { searchByTitle, searchById } = props

    return (
    <section id="movie-search">
      <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
        <form onSubmit={searchByTitle} id="title-search-form" method="get">
          <input type="text" name="title" placeholder="Enter movie title" />
          <input type="submit" value="Search for this title" />
        </form>
      </div>

      <div className="search">
        <form onSubmit={searchById} id="id-search-form" method="get">
          <input type="text" name="id" placeholder="Enter omdb movie ID" />
          <input  type="submit" value="Search by ID" />
        </form>
      </div>
    </section>
    )
  
}



export default Search;