import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { artist, setArtist, error } = useGlobalContext();
  return (
    <section className='section'>
      <form
        className='search-form'
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h3>Artist:</h3>
        <input
          type='text'
          className='form-input'
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        {error.show && <div className='error'>{error.msg}</div>}
      </form>
    </section>
  );
};

export default SearchForm;
