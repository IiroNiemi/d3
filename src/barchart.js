import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }
    
  drawChart() {
		const data = [12, 5, 6];

    const svgContainer = d3.select("body")
                            .append("svg")
                            .attr("width", 200)
                            .attr("height", 200);

    const circles = svgContainer.selectAll("circle")
                                .data(data)
                                .enter()
                                .append("circle");

    const circleAttributes = circles
                            .attr("cx", 50)
                            .attr("cy", 50)
                            .attr("r", function(d) {return d;})
                            .style("fill", "green");

    //let svg = d3.pie()(data);
    
    console.log(circles);

  }
        
  render(){
    return <div id={"#" + this.props.id}></div>
  }
}
    
export default BarChart;