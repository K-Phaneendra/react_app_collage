import React from "react";
import CanvasJSReact from '../../assets/canvas-charts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// import {
//   XYPlot,
//   LineSeries,
//   VerticalGridLines,
//   HorizontalGridLines,
//   XAxis,
//   YAxis,
//   RadialChart,
//   MarkSeries
// } from "react-vis";

function DoughnutChart(props) {
  const { title, dataPoints, chartText } = props
  const options = {
    animationEnabled: true,
    title: {
      text: title
    },
    subtitles: [{
      text: chartText,
      verticalAlign: "center",
      fontSize: 24,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      showInLegend: true,
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      dataPoints: dataPoints
    }]
  }
  // const data = [
  //   { x: 0, y: 8 },
  //   { x: 1, y: 5 },
  //   { x: 2, y: 4 },
  //   { x: 3, y: 9 },
  //   { x: 4, y: 1 },
  //   { x: 5, y: 7 },
  //   { x: 6, y: 6 },
  //   { x: 7, y: 3 },
  //   { x: 8, y: 2 },
  //   { x: 9, y: 0 },
  // ];
  // const myData = [{angle: 1}, {angle: 5}, {angle: 2}]
  // const myData = [ {angle: 1}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation'}, {angle: 5, label: 'Alt Label'}, {angle: 3}, {angle: 5, subLabel: 'Sub Label only', className: 'custom-class'} ]
  // myData.map(each => {
  //   each.innerRadius = 0.5
  //   // each.label = 'name'
  //   // each.subLabel = 'sub label'
  //   // each.children = 'sample data on tooltip'
  //   return each
  // })

  return (
    <div>
      <CanvasJSChart options = {options} 
				// onRef={ref => this.chart = ref}
			/>
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      {/* <RadialChart
  data={myData}
  width={300}
  height={300}
  showLabels
  labelsAboveChildren />
  <XYPlot height={200} width={200} xDomain={[9, 0]}>
  <MarkSeries data={data} />
</XYPlot>
<XYPlot height={300} width= {300}>
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries data={data} />
</XYPlot> */}
    </div>
  );
}

export default DoughnutChart;
