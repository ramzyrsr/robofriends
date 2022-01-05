import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className="pa3 to b--green bg-lightest-blue"
                types="search" 
                placeholder='search robots' 
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;