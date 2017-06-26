import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class ProgressChart extends React.Component {
    constructor() {
        super();
        this.state = {percent:0};
        this.updateData = this.updateData.bind(this);
    }
    componentWillMount(){
        this.setState({percent:.87});
    }
    updateData(){
        const value=(Math.floor(Math.random() * (80) + 10))/100;
        this.setState({percent:value});
    }
    render(){
        const {
            width = 200,
            height = 200,
            chartId = 'v_chart'
        } = this.props;
        const color = ['#404F70','#67BAF5','#2d384d'];
        const outerRadius=(height/2)-10;
        const innerRadius=outerRadius-20;
        const arc=d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(2*Math.PI);
        const arcLine=d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .cornerRadius(20)
            .startAngle(-0.05);
        const transform='translate('+width/2+','+height/2+')';
        const style1={
            filter:'url(#inset-shadow1)'
        };
        const style2={
            filter:'url(#inset-shadow2)'
        };
        const styleText= {
            'fontSize': '40px'
        };
        return (
            <div>
                <svg id={chartId} width={width}
                     height={height} onClick={this.updateData}>

                    <g transform={transform}>
                        <InsetShadow id="inset-shadow1" stdDeviation="5" floodColor="black" floodOpacity=".5"/>
                        <InsetShadow id="inset-shadow2" stdDeviation="1" floodColor="white" floodOpacity=".5"/>

                        <path fill={color[0]} d={arc()} style={style1}></path>
                        <path fill={color[1]} d={arcLine({endAngle:(2*Math.PI)*this.state.percent})}
                              style={style2}></path>
                        <circle r={innerRadius} cx="0" cy="0"
                                fill={color[2]} fillOpacity="1"/>
                        <text textAnchor="middle" dy="15" dx="5" fill={d3.rgb(color[1]).brighter(2)}
                            style={styleText}>{this.state.percent*100+'%'}</text>
                    </g>
                </svg>
            </div>
        );
    }
};

const InsetShadow = (props) => {
    return(
        <defs>
            <filter id={props.id}>
                <feOffset dx="0" dy="0"/>
                <feGaussianBlur is stdDeviation={props.stdDeviation} result="offset-blur"/>
                <feComposite is operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
                <feFlood is flood-color={props.floodColor} flood-opacity={props.floodOpacity} result="color"/>
                <feComposite is operator="in" in="color" in2="inverse" result="shadow"/>
                <feComposite is operator="over" in="shadow" in2="SourceGraphic"/>
            </filter>
        </defs>
    );
};

export default ProgressChart;