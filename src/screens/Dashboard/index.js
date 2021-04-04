import React from "react";
import { Card } from "react-bootstrap";
import DonutChart from "./DonutChart";
import BarChart from "./FusionCharts/BarChart";
import OhlcChart from "./OHCLChart";
// import DonutChart from './FusionCharts/DonutChart';
import RELineChart from "./Recharts/LineChart";
import REBarChart from "./Recharts/BarChart";
// import DonutChart from "./Recharts/DonutChart";
import PositiveNegativeBarChart from "./Recharts/PositiveNegativeBarChart";
import { HalfDonut } from "./Recharts/DonutChart";
import SpineLineChart from './SpineLineChart'
import './styles.css'
import Axes from "./VisCharts/Axes";
import ComposedChartWithAxesLabels from "./Recharts/ComposedChartWithAxesLabels";

function Dashboard(props) {
  return (
    <div>
      <div className="text-center">
        <h1>Sample dashboard</h1>
        <h3>Displays a sample dashboard with graphs in it</h3>
      </div>
      <div className="bg-light">
        <div className="d-flex justify-content-between p-2">
          <Card>
          <Card.Body>
                <Card.Title>Profit before tax</Card.Title>
                <div className="text-center lead">
                86,487
                </div>
              </Card.Body>
          </Card>
          <Card>
          <Card.Body>
                <Card.Title>Net operating cash flow</Card.Title>
                <div className="text-center lead">
                47,271
                </div>
              </Card.Body>
          </Card>
          <Card>
          <Card.Body>
                <Card.Title>Net financing cash flow</Card.Title>
                <div className="text-center lead">
                93,242
                </div>
              </Card.Body>
          </Card>
          <Card>
          <Card.Body>
                <Card.Title>Net investing cash flow</Card.Title>
                <div className="text-center lead">
                52,644
                </div>
              </Card.Body>
          </Card>
          {/* <Card>
          <Card.Body>
                <Card.Title>Cash at end of month</Card.Title>
                698
              </Card.Body>
          </Card> */}
        </div>
        <div className="row p-2">
          <Card>
          <Card.Body>
                <Card.Title>Cash flow</Card.Title>
                <div className="row rechart-container-full-bar-graph">
          <ComposedChartWithAxesLabels />
                </div>
              </Card.Body>
          </Card>
        </div>
        <div className="row pt-2 pb-2">
          <div className="col-md-6">
          <Card style={{ height: '100%' }}>
              <PositiveNegativeBarChart />
            </Card>
            </div>
          <div className="col-md-6">
            <Card>
              <Card.Body>
                <Card.Title>User satisfaction</Card.Title>
                <DonutChart
                  dataPoints={[
                    { name: "Unsatisfied", y: 5 },
                    { name: "Very Unsatisfied", y: 31 },
                    { name: "Very Satisfied", y: 40 },
                    { name: "Satisfied", y: 17 },
                    { name: "Neutral", y: 7 },
                  ]}
                  chartText=""
                />
              </Card.Body>
            </Card>
          </div>

          {/* <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
            
          </div> */}
          {/* <REBarChart />
          <RELineChart />
          <DonutChart /> */}
          {/* <BarChart />
        <DonutChart /> */}
        </div>
        <div className="row pt-2 pb-2">
          <div className="col-md-4">
          <Card>
              <Card.Body>
                <Card.Title>Days Inventory Outstanding</Card.Title>
                <div className="row rechart-container-half-donut">
                  <HalfDonut />
                </div>
                <div className="row">
                  <div>Inventory Trend</div>
                  <div className="row">
                    {/* <SpineLineChart /> */}
                    <Axes />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card>
              <Card.Body>
                <Card.Title>Days Inventory Outstanding</Card.Title>
                <div className="row rechart-container-half-donut">
                  <HalfDonut />
                </div>
                <div className="row">
                  <div>Inventory Trend</div>
                  <div className="row">
                    {/* <SpineLineChart /> */}
                    <Axes />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
          <Card>
              <Card.Body>
                <Card.Title>Days Inventory Outstanding</Card.Title>
                <div className="row rechart-container-half-donut">
                  <HalfDonut />
                </div>
                <div className="row">
                  <div>Inventory Trend</div>
                  <div className="row">
                    {/* <SpineLineChart /> */}
                    <Axes />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
