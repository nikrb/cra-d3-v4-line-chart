import React, { Component } from 'react';
import LineChart from './components/LineChart';
import './App.css';

import data from './data.json';

class App extends Component {
  render() {
    const margin = {top: 20, right: 30, bottom: 50, left: 40};
    return (
      <div className="App">
        <h1>Line Chart</h1>
        <LineChart margin={margin}
          data={data} width={600} height={400} />
      </div>
    );
  }
}

export default App;
