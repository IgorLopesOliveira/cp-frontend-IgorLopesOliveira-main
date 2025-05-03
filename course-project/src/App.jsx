import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SlideShow from './components/SlideShow';
import FairyTaleList from './components/FairyTaleList';
import Footer from './components/Footer';
import MakingOf from './components/MakingOf';
import AboutUs from './components/AboutUs';  

import slides from './api/slides.json';

function MakingOfPage() {
  return <MakingOf />;
}

function AboutUsPage() {
  return <AboutUs />;
}

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(""); 

  const allItems = slides.flat();

  
  const filteredItems = allItems.filter((item) =>
    (item.fairyTaleTitle.toLowerCase().includes(searchItem.toLowerCase()) &&
     (selectedGenre === "" || item.genre === selectedGenre)) 
  );

 
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre); 
  };

  return (
    <Router>
      <Header onSearch={setSearchItem} onGenreSelect={handleGenreSelect} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideShow slides={slides} />
              <FairyTaleList slides={filteredItems} />
            </>
          }
        />
        <Route path="/makingof" element={<MakingOfPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
