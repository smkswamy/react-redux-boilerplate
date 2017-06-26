import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class LineChart extends React.Component {
    constructor() {
        super();
        this.state = {
            tooltip:{ display:false,data:{key:'',value:''}},
            width:0
        };
        this.showToolTip = this.showToolTip.bind(this);
        this.hideToolTip = this.hideToolTip.bind(this);
    }
    showToolTip(e){
        e.target.setAttribute('fill', '#FFFFFF');

        this.setState({tooltip:{
            display:true,
            data: {
                key:e.target.getAttribute('data-key'),
                value:e.target.getAttribute('data-value')
                },
            pos:{
                x:e.target.getAttribute('cx'),
                y:e.target.getAttribute('cy')
            }

            }
        });
    }
    hideToolTip(e){
        e.target.setAttribute('fill', '#7dc7f4');
        this.setState({tooltip:{ display:false,data:{key:'',value:''}}});
    }
    render() {
        const { width = 800, height = 300, chartId = 'v1_chart' } = this.props;
        const data=[
            {day:'02-11-2016',count:180},
            {day:'02-12-2016',count:250},
            {day:'02-13-2016',count:150},
            {day:'02-14-2016',count:496},
            {day:'02-15-2016',count:140},
            {day:'02-16-2016',count:380},
            {day:'02-17-2016',count:100},
            {day:'02-18-2016',count:150}
        ];
        const margin = {top: 5, right: 50, bottom: 20, left: 50},
            w = width - (margin.left + margin.right),
            h = height - (margin.top + margin.bottom);
        const parseDate = d3.timeParse("%m-%d-%Y");
        data.forEach(function (d) {
            d.date = parseDate(d.day);
        });
        const x = d3.scaleTime()
            .domain(d3.extent(data, function (d) {
                return d.date;
            }))
            .rangeRound([0, w]);

        const y = d3.scaleLinear()
            .domain([0,d3.max(data,function(d){
                return d.count+100;
            })])
            .range([h, 0]);

        const yAxis = d3.axisLeft(y)
            .ticks(5);

        const xAxis = d3.axisBottom(x)
            .tickValues(data.map(function(d,i){
                if(i>0)
                    return d.date;
            }).splice(1))
            .ticks(4);
        const xGrid = d3.axisBottom(x)
            .ticks(5)
            .tickSize(-h, 0, 0)
            .tickFormat("");
        const yGrid = d3.axisLeft(y)
            .ticks(5)
            .tickSize(-w, 0, 0)
            .tickFormat("");
        const line = d3.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.count); })
          .curve(d3.curveCardinal);

        const transform='translate(' + margin.left + ',' + margin.top + ')';
        return (
            <div>
                <svg id={chartId} width={width} height={height}>
                    <g transform={transform}>
                        <Grid h={h} grid={yGrid} gridType="y"/>
                        <Axis h={h} axis={yAxis} axisType="y" />
                        <Axis h={h} axis={xAxis} axisType="x" />
                        <path className="line shadow" d={line(data)} strokeLinecap="round"/>
                        <Dots data={data} x={x} y={y} showToolTip={this.showToolTip} hideToolTip={this.hideToolTip}/>
                        <ToolTip tooltip={this.state.tooltip}/>
                    </g>
                </svg>
            </div>
        )
    }
};

class Axis extends React.Component {
    componentDidMount() {
        this.renderAxis();
    }
    componentDidUpdate() {
        this.renderAxis();
    }
    renderAxis() {
        const node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.axis);
    }
    render() {
        const translate = "translate(0,"+(this.props.h)+")";
        return (
            <g className="axis" transform={this.props.axisType=='x'? translate : ""} >
            </g>
        );
    }
};

class Grid extends React.Component {
    constructor() {
        super();
        this.renderGrid = this.renderGrid.bind(this);
    }
    componentDidMount() {
        this.renderGrid();
    }
    componentDidUpdate() {
        this.renderGrid();
    }
    renderGrid() {
        const node = ReactDOM.findDOMNode(this);
        d3.select(node).call(this.props.grid);
    }
    render() {
        const translate = "translate(0,"+(this.props.h)+")";
        return (
            <g className="y-grid" transform={this.props.gridType=='x'?translate:""}>
            </g>
        );
    }
};

const Dots = (props) => {
    const data = props.data.splice(1);
    data.pop();
    const circles = data.map((d, i) => {
        return (<circle className="dot" r="7" cx={props.x(d.date)} cy={props.y(d.count)} fill="#7dc7f4"
                        stroke="#3f5175" strokeWidth="5px" key={i}
                        onMouseOver={props.showToolTip} onMouseOut={props.hideToolTip}
                        data-key={d3.timeFormat("%b %e")(d.date)} data-value={d.count}/>)
    })
    return(
        <g>
            {circles}
        </g>
    );
};

const ToolTip = (props) => {
    let visibility="hidden";
    let transform="";
    let x=0;
    let y=0;
    const width=150,height=70;
    const transformText='translate('+width/2+','+(height/2-5)+')';
    let transformArrow="";

    if(props.tooltip.display == true){
        const position = props.tooltip.pos;
        x= position.x;
        y= position.y;
        visibility="visible";
        if(y>height){
            transform='translate(' + (x-width/2) + ',' + (y-height-20) + ')';
            transformArrow='translate('+(width/2-20)+','+(height-2)+')';
        }else if(y<height){

            transform='translate(' + (x-width/2) + ',' + (Math.round(y)+20) + ')';
            transformArrow='translate('+(width/2-20)+','+0+') rotate(180,20,0)';
        }
    } else{
        visibility="hidden"
    }

    return (
        <g transform={transform}>
            <rect class="shadow" is width={width} height={height} rx="5" ry="5" visibility={visibility} fill="#6391da" opacity=".9"/>
            <polygon class="shadow" is points="10,0  30,0  20,10" transform={transformArrow}
                        fill="#6391da" opacity=".9" visibility={visibility}/>
            <text is visibility={visibility} transform={transformText}>
                <tspan is x="0" text-anchor="middle" font-size="15px" fill="#ffffff">{props.tooltip.data.key}</tspan>
                <tspan is x="0" text-anchor="middle" dy="25" font-size="20px" fill="#a9f3ff">{props.tooltip.data.value+" visits"}</tspan>
            </text>
        </g>
    );
};

export default LineChart;