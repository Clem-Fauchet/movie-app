import React, { useState } from 'react'

import './App.scss'
import Search from './components/Search'
import Results from './components/Results'
import PopUp from './components/PopUp'

function App() {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
    selected: {},
  })

  const apiUrl = 'http://omdbapi.com/?apikey=b5e98375'

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${apiUrl}&s=${state.searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setState((prevState) => {
            return { ...prevState, results: data.Search }
          })
        })
    }
  }

  const handleInput = (e) => {
    let inputQuery = e.target.value
    setState((prevState) => {
      return { ...prevState, searchQuery: inputQuery }
    })
  }

  const openPopup = (id) => {
    fetch(`${apiUrl}&i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        let result = data
        setState((prevState) => {
          return { ...prevState, selected: result }
        })
      })
      .catch((err) => console.log(err))
  }

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} }
    })
  }

  return (
    <div className='App'>
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != 'undefined' ? (
          <PopUp selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  )
}

export default App
