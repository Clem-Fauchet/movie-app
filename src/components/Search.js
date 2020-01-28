import React from 'react'

import './search.scss'

function Search() {
  return (
    <div>
      <section className='search-box-wrapper'>
        <input
          type='text'
          placeholder='Search for a movie...'
          className='search-box'
        />
      </section>
    </div>
  )
}

export default Search
