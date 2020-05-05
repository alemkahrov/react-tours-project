import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import TourList from './components/TourList'
import Header from './components/Header'

function App() {
  return (
    <React.Fragment>
      <Header />
      <TourList />
    </React.Fragment>
  );
}

export default App;
