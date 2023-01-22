import React from 'react'

function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
     <div className='searchInputs'>
      <input  type="text" />
      <div className='searchIcon'></div>
     </div>
     <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar