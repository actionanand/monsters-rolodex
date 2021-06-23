import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input placeholder={placeholder}
    className='search'
    type='search'
    onChange={ handleChange }
  />
);