import React, { useState } from 'react'

import './App.scss'
import Search from './components/Search'

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {},
  })

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${apiUrl}&s=${state.searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          let results = data.Search
          setState((prevState) => {
            return { ...prevState, results: results }
          })
        })
    }
  }

  const apiUrl = 'http://omdbapi.com/?i=tt3896198&apikey=b5e98375'

  const handleInput = (e) => {
    let inputQuery = e.target.value
    setState((prevState) => {
      return { ...prevState, searchQuery: inputQuery }
    })
  }

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
      </main>
    </div>
  )
}

export default App
