// Jakub Wawak
// kubawawak@gmail.com
import React from 'react';
import { MdSearch } from 'react-icons/md';

//react component for rendering search bar
const Search = ({handleSearchNote}) => {
    return <div className='search'>
        <MdSearch className="search-icons" size='1.3em'/>
        <input onChange = {(event) => handleSearchNote(event.target.value)} type = "text" placeholder = "Type to search..."></input>

    </div>;
}

export default Search;