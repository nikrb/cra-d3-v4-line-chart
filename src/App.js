import React, { Component } from 'react';
import LineChart from './components/LineChart';
import './App.css';

class App extends Component {
  render() {
    const margin = {top: 20, right: 30, bottom: 50, left: 40};
    const data = [
      { date: "2017-09-01", close: "342"},
      { date: "2017-08-31", close: "250"},
      { date: "2017-08-30", close: "125"},
      { date: "2017-08-29", close: "276"},
      { date: "2017-08-28", close: "67"},
      { date: "2017-08-27", close: "380"},
      { date: "2017-08-26", close: "342"},
      { date: "2017-08-25", close: "250"},
      { date: "2017-08-24", close: "125"},
      { date: "2017-08-23", close: "100"},
      { date: "2017-08-22", close: "90"},
      { date: "2017-08-21", close: "89"}
    ];
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
