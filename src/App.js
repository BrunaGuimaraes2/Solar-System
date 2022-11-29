import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missios from './components/Missions';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missios />
      </main>
    );
  }
}

export default App;
