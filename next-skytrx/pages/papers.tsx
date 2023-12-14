import React from 'react';
import Navbar from '../components/Nbar';
import BibUnit from '../components/BibUnit';
import SearchBox from '../components/SearchBox';
import papers from '../public/data/papers.json';

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: '8px' }}></div>
      <SearchBox />
      <BibUnit articles={papers} />
    </div>
  );
}