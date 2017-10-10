import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

import axios from 'axios'

class App extends Component {

  state = {
    title: '',
    id: '',
    year: '',
    director: '',
    genre: '',
    plot: ''
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    const title = event.target.title.value

    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&t=${title}`)
    
      .then((response) => {
        this.setState({ 
          title: response.data.Title,
          year: response.data.Year,
          director: response.data.Director,
          genre: response.data.Genre,
          plot: response.data.Plot
         })
      })
      .catch((error) => {
        console.error('Error: ', error)
      })
  }

 searchById = (event) => {
    event.preventDefault()
    const id = event.target.id.value

    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94&i=${id}`)
    .then((response) => {
      this.setState({ 
        title: response.data.Title,
        year: response.data.Year,
        director: response.data.Director,
        genre: response.data.Genre,
        plot: response.data.Plot
       })

    })
    .catch((error) => {
      console.error('Error: ', error)
    })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this.searchByTitle} searchById={this.searchById} />
        <Movie title={this.state.title} year={this.state.year} director={this.state.director} genre={this.state.genre} plot={this.state.plot}/>
      </div>
    );
  }
}

export default App;
