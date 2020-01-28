import React from 'react'

import './search.scss'

function Search({ handleInput, search }) {
  return (
    <div>
      <section className='search-box-wrapper'>
        <input
          type='text'
          placeholder='Search for a movie...'
          className='search-box'
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
    </div>
  )
}

export default Search
