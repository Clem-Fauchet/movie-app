import React, { useState } from 'react'

import './App.scss'
import Search from './components/Search'

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {},
  })

  const apiUrl = 'http://omdbapi.com/?i=tt3896198&apikey=b5e98375'

  const handleInput = (e) => {
    let searchQuery = e.target.value
  }
  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search />
      </main>
    </div>
  )
}

export default App
