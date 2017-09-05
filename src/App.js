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
      { date: "2017-08-27", close: "380"}
    ];
    return (
      <div className="App">
        <LineChart margin={margin}
          data={data} width={600} height={400} />
      </div>
    );
  }
}

export default App;
