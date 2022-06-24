import React from "react";
// import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
import {CanvasJSChart} from 'canvasjs-react-charts'

class WorkoutDistributionGraph extends React.Component {
    constructor(props) {
        super(props);
        if(props.tableData!==null&&props.tableData!==undefined&&props.tableData.length!==0)
        {
            this.state = {tableData: props.tableData};
            let workoutsTable = this.state.tableData;

            let sum = {
                'basketball' :0,
                'whights':0,
                'cardio':0
            }
            let totalsum=0
            let workoutsToGraph = [];
            for (let i = 0; i < workoutsTable.length; i++) {
                let jsonVals = Object.values(workoutsTable[i]);
                console.log(jsonVals);
                sum[jsonVals[2]] += 1;
                totalsum++;
            }
            workoutsToGraph.push({label:'basketball', y: (sum['basketball']) * 100 / totalsum});
            workoutsToGraph.push({label:'whights', y: (sum['whights']) * 100 / totalsum});
            workoutsToGraph.push({label:'cardio', y: (sum['cardio']) * 100 / totalsum});
           

            this.state = {
                workoutsToGraphDisplay: workoutsToGraph,
            };
        }
 
    };

    render() {
        if(this.props.tableData!==null&&this.props.tableData!==undefined&&this.props.tableData.length!==0)
        {

		const options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Workout Distribution"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label} (#percent%)",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
                percentFormatString: "#0.##",
                indexLabel: "{label} - #percent%",
				dataPoints: this.state.workoutsToGraphDisplay
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
        }
        else{
            return (
               <div></div> 
            )

    

        }

     
    }


}


export default WorkoutDistributionGraph;
