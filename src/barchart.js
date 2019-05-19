import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
		const data = [12, 5, 8];

    const svgContainer = d3.select("body")
                            .append("svg")
                            .attr("width", 200)
                            .attr("height", 200);

    const circles = svgContainer.selectAll("circle")
                                .data(data)
                                .enter()
                                .append("circle");

    const circleAttributes = circles
                            .attr("cx", function(d) {return d * 5;})
                            .attr("cy", function(d) {return d * 10;})
                            .attr("r", function(d) {return d * 2;})
                            .style("fill", "green");

    //let svg = d3.pie()(data);
    
    console.log(circles);

  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;