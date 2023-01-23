import React from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({placeholder, data}) {
  return (
    <div className='search'>
     <div className='searchInputs'>
      <input  type="text" placeholder={placeholder} />
      <div className='searchIcon'>
        <SearchIcon />
      </div>
     </div>
     <div className='dataResult'>
      {data.map((value, key) => {
        return <a className='dataItem' href={value.link} target="_blank" >
         <p>
           {value.title}
        </p>
              </a>
      })}
     </div>
    </div>
  )
}

export default SearchBar