import React from 'react';
import Songs from './Songs';
import SearchForm from './SearchForm';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <Songs />
    </div>
  );
};

export default Home;
