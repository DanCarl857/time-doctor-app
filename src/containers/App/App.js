import React from 'react';
import './App.css';

// Import other components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Watch from './../../components/Watch/Watch';

/* 
 * Main Application Container
*/
const App = () =>  {
  return (
    <div className="App">
      <Header />
      <Watch />
      <Footer />
    </div>
  );
}

export default App;
