import React from 'react';
import './style.scss';
import LineChart from './LineChart';
import DonutChart from './DonutChart';
import ProgressChart from './ProgressChart';
import BarChart from './BarChart';

const Visitors = () => {
    return (
        <div>
            <h3>Visitors to your site</h3>
            <div className="bottom-right-svg">
                <LineChart/>
            </div>
        </div>
    )
}

const Browser = () => {
    return (
        <div>
            <h3>Browser Share</h3>
            <div className="pad bottom-left-svg">
                <DonutChart id="bs_chart" padAngle={0.03}/>
            </div>
        </div>
    )
}

const RetVisitors = () => {
    return (
        <div>
            <h3>Returning Visitors</h3>
            <div className="pad bottom-right-svg">
                <ProgressChart />
                <br/>
                <BarChart />
            </div>
        </div>
    )
}

const VisitorDashBoard = ({ cartState, actions }) => {
    return (
        <div className="container">
                <div className="row">
                    <div className="col-xs-12" >
                        <div className="top fontSize">
                            <h2>Visitor Dashboard</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12" >
                        <div className="top" id="top-line-chart">
                            <Visitors/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-7">
                        <div className="bottom-left" id="browser">
                            <Browser/>
                        </div>
                    </div>
                    <div className="col-xs-5">
                        <div className="bottom-right" id="ret_visitors">
                            <RetVisitors/>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default VisitorDashBoard;