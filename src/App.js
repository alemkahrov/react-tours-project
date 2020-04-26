import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header'
import TourList from './components/TourList/TourList'

function App() {
  return (
    <React.Fragment>
      <Header />
      <TourList />
    </React.Fragment>
  );
}

export default App;
