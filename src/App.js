import React, { Component } from 'react';
import './App.css';

// Import other components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Watch from './components/Watch/Watch';

/* 
 * Main Application
*/
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Watch />
        <Footer />
      </div>
    );
  }
}

export default App;
