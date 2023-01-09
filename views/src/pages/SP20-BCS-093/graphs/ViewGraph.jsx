import React from 'react';
import * as d3 from 'd3';

class MyBarChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: this.getData() 
        };
      }

    getData()
      {
          fetch("http://localhost:4000/lms").then((result) =>
          {
          result.json().then((resp) =>
          {
                  return resp
              })
          })
      }  
    componentDidMount() {
    this.drawChart();
  }
  

  drawChart() {

    const svg = d3.select("body")
      .append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height);

    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    svg.selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => this.props.height - (10 * d) - 3);
  }

  render() {
    return <div id={"#" + this.props.id}></div>
  }
}
export default {MyBarChart}