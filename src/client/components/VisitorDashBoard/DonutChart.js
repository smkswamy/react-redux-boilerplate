import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

class DonutChartPath extends React.Component {
    componentWillMount(){
        const radius=this.props.height;
        const outerRadius=radius/2;
        const innerRadius=radius/3.3;
        this.arc=d3.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);
        this.transform='translate('+radius/2+','+radius/2+')';
    }
    createChart(_self){
        const paths = (this.props.pie(this.props.data)).map(function(d, i) {
            return (
                <path fill={_self.props.color(i)} d={_self.arc(d)} key={i}/>
            )
        });
        return paths;
    }
    render(){
        const paths = this.createChart(this);
        return(
            <g transform={this.transform}>
                {paths}
            </g>
        )
    }
};

class DonutChartLegend extends React.Component {
    createChart(_self){
        const texts = (this.props.pie(this.props.data)).map(function(d, i) {
            const transform="translate(10,"+i*30+")";
            const rectStyle = {
                fill:_self.props.color(i),
                stroke:_self.props.color(i)
            };
            const textStyle = {
                fill:_self.props.color(i)
            };
            return (
                <g transform={transform} key={i}>
                    <rect width="20" height="20" style={rectStyle} rx="2" rx="2"/>
                    <text x="30" y="15" className="browser-legend" style={textStyle}>{d.data.name}</text>
                </g>
            )
        });
        return texts;
    }
    render(){
        const style={
            visibility:'visible'
        };
        if(this.props.width<=this.props.height+70){
            style.visibility='hidden';
        }
        const texts = this.createChart(this);
        const transform="translate("+(this.props.width/2+80)+",55)";
        return(
            <g is transform={transform} style={style}>
                {texts}
            </g>
        )
    }
}

class DonutChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data:[],
            width:0
        }
        this.updateData = this.updateData.bind(this);
    }

    componentWillMount() {
        this.pie=d3.pie()
            .value(function(d){return d.count})
            .padAngle(this.props.padAngle)
            .sort(null);
        this.color = d3.scaleOrdinal()
            .range(['#68c8d7','#eccd63','#bb8cdd','#de6942','#52b36e','#bbc7d9']);
        const data = [
            { name: 'IE', count: 40 },
            { name: 'Chrome', count: 32 },
            { name: 'Safari', count: 14 },
            { name: 'Firefox', count: 9 },
            { name: 'Others', count: 6 }
        ];

        this.setState({'data':data,width:this.props.width || 450});
    }
    updateData() {
        var data = [
            { name: 'IE', count: Math.random() },
            { name: 'Chrome', count: Math.random() },
            { name: 'Safari', count: Math.random() },
            { name: 'Firefox', count: Math.random() },
            { name: 'Others', count: Math.random() },
            { name: 'Opera', count: Math.random() }
        ];
        this.setState({'data':data });
    }
    render() {
        const { width = 450,
            height = 250,
            padAngle = 0 } = this.props;
        return (
            <div>
                <svg id={this.props.id} width={this.state.width}
                     height={height} className="shadow" onClick={this.updateData}>
                    <DonutChartPath width={this.state.width} height={height}
                                    pie={this.pie} color={this.color} data={this.state.data}/>

                    <DonutChartLegend pie={this.pie} color={this.color} data={this.state.data}
                                      width={this.state.width} height={height}/>

                </svg>
            </div>
        )
    }
};

export default DonutChart;