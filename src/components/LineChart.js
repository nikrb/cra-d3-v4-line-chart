import React from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import XYAxis from './XYAxis';

export default class LineChart extends React.Component {
  static propTypes = {
    data: PropTypes.array
  };
  render = () => {
    const {width,height,margin} = this.props;
    const inner_width = width-margin.left-margin.right;
    const inner_height = height - margin.top - margin.bottom;
    const transform = `translate( ${margin.left}, ${margin.top})`;
    // parse the date / time
    var parseTime = d3.timeParse("%Y-%m-%d");
    const data = this.props.data.map( (d) => {
      return { date: parseTime( d.date), close: +d.close};
    });
console.log(data);
    // set the ranges
    var x = d3.scaleTime().range([0, inner_width]);
    var y = d3.scaleLinear().range([inner_height, 0]);

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([d3.min(data, d => d.close), d3.max(data, d => d.close )]);

    // define the line
    var valueline = d3.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
    const dots = data.map( (d,i) => {
      return <circle key={i} cx={x(d.date)} cy={y(d.close)} r="5" fill="red" />;
    });
    return (
      <svg width={width} height={height}>
        <g transform={transform} >
          <path d={valueline(data)} fill="transparent" stroke="black"/>
          {dots}
        </g>
        <XYAxis scales={{xScale:x,yScale:y}} margins={margin} height={height} width={width} />
      </svg>
    );
  };
};
