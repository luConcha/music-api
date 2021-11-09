import React from 'react';
import Songs from './Songs';
import SearchForm from './SearchForm';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <SearchForm />
      <Songs />
      <Footer />
    </div>
  );
};

export default Home;
