import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

export default class LineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array
  };
  render = () => {
    const width = 600;
    const height = 400;

    // parse the date / time
    var parseTime = d3.timeParse("%Y-%m-%d");
    const data = this.props.data.map( (d) => {
      return { date: parseTime( d.date), close: +d.close};
    });
console.log(data);
    // set the ranges
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);

    // define the line
    var valueline = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
    const dots = data.map( (d,i) => {
      return <circle key={i} cx={x(d.date)} cy={y(d.close)} r="5" fill="red" />;
    });
console.log( valueline(data));
    return (
      <svg width={width} height={height}>
        <path d={valueline(data)} fill="transparent" stroke="black"/>
        {dots}
      </svg>
    );
  };
};
