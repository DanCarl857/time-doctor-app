import React from 'react';
import { connect } from 'react-redux';
import './App.css';

// Import other components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Watch from './../../components/Watch/Watch';

/* 
 * Main Application Container
*/
class App extends React.Component {

  componentDidMount() {
    this.props.ipc.on('timer-state-change', (event, args) => {
      
    })
  }

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

function mapStateToProps(state) {
  return {
    ...state.start
  };
}

export default connect(mapStateToProps, null)(App);
