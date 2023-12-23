import React from 'react';
import Header from './components/Header';
import Hero1 from './components/Hero1';
import Footer from './components/Footer'
import Men from './pages/Men';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' Component={Hero1} exact />
        <Route path='/men' Component={Men} />
      </Routes>
      <Footer/>
      
      
    
    </div>
  );
}

export default App;
