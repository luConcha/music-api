import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleSong from './SingleSong';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/songs/:id' element={<SingleSong />} />
    </Routes>
  );
}

export default App;
