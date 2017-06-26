import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

const BarChart = ({ width = 300, height = 70, chartId = 'v_chart' }) => {
    const data=[
        { month:'Jan', value:40 },
        { month:'Feb', value:50 },
        { month:'Mar', value:65 },
        { month:'Apr', value:60 },
        { month:'May', value:70 },
        { month:'Jun', value:55 },
        { month:'Jul', value:80 },
        { month:'Aug', value:55 },
        { month:'Sep', value:75 },
        { month:'Oct', value:50 },
        { month:'Nov', value:60 },
        { month:'Dec', value:75 }
    ];

    const margin={top:5,right:5,bottom:5,left:5},
    w=width-(margin.left+margin.right),
    h=height-(margin.top+margin.bottom);

    const transform='translate('+margin.left+','+margin.top+')';

    const x=d3.scaleBand()
        .domain(data.map(function(d){
            return d.month;
        }))
        .rangeRound([0,width]).padding(0.1);

    const y=d3.scaleLinear()
        .domain([0,100])
        .range([height,0]);


    const rectBackground=(data).map(function(d, i) {
        return (
            <rect fill="#58657f" rx="3" ry="3" key={i}
                    x={x(d.month)} y={margin.top-margin.bottom}
                    height={h}
                    width={x.bandwidth()}/>
        )
    });
    const rectForeground=(data).map(function(d, i) {
        return (
            <rect fill="#74d3eb" rx="3" ry="3" key={i}
                    x={x(d.month)} y={y(d.value)} className="shadow"
                    height={h-y(d.value)}
                    width={x.bandwidth()}/>
        )
    });

    return(
        <div>
            <svg id={chartId} width={width}
                    height={height}>

                <g transform={transform}>
                    {rectBackground}
                    {rectForeground}
                </g>
            </svg>
        </div>
    );
};

export default BarChart;