'use strict'

// TODO:
// 1. Fetch data from google sheets API

// Sample data
const xArray = [1,2,3,4,5,6,7,8,9,10];
const lkyArray = [10,3,10,4,5,6,7,7,6,9];
const sryArray = [10,5,6,7,8,9,11,7,9,2]

let graph = function(initials, xAxis, yAxis) {
    let yAxisSum = [];
    let sum = 0;

    let yAxisAverage = [];
    let average = 0;

    for (let i = 0; i < yAxis.length; i++) {
        sum += yAxis[i];
        yAxisSum.push(sum);
        
        average = sum / (i+1);
        yAxisAverage.push(average);
    }

    // Creating a scatterplot displaying rating totals over time
    let scatterGraphSum = {
        x: xAxis,
        y: yAxisSum,
        mode: 'lines+markers',
        name: `${initials} sum`,
        line: {
            color: initials === "lk" ? "#468c2d" : "#3b5c42"
        },
        marker: {
            size: 8
        },
        type: 'scatter'
    }
    
    // Creating a scatterplot displaying average ratings over time
    let scatterGraphAverage = {
        x: xAxis,
        y: yAxisAverage,
        mode: 'lines+markers',
        name: `${initials} average`,
        line: {
            color: initials === "lk" ? "#468c2d" : "#3b5c42",
            dash: "dash"
        },
        marker: {
            size: 8
        },
        type: 'scatter'
    }

    // Doing some formatting for the graph

    // Plotting it with plotly (see https://plotly.com/graphing-libraries/)
    Plotly.addTraces(`sumPlot`, scatterGraphSum);
    Plotly.addTraces(`averagePlot`, scatterGraphAverage);
}

const config = {
    displayModeBar: false
}

const layout = {
    height: window.screen.height*0.5,
    width: window.screen.width*0.5,
    margin: {
        autoexpand: false
    },
    scene: {
        aspectratio: {
            x: .4,
            y: .4
        }
    },
    font: {
        color: "#bdbdbd"
    },
    xaxis: {
        fixedrange: true,
        tickcolor: "#bdbdbd",
        gridcolor: "#bdbdbd",
        zerolinecolor: "#bdbdbd",
    },
    yaxis: {
        fixedrange: true,
        tickcolor: "#bdbdbd",
        gridcolor: "#bdbdbd",
        zerolinecolor: "#bdbdbd"
    },
    legend: {
        orientation: "h"
    },
    paper_bgcolor: "#00000000",
    plot_bgcolor: "#00000000"
}

Plotly.newPlot("averagePlot", [], layout, config);
Plotly.newPlot("sumPlot", [], layout, config);

graph("lk", xArray, lkyArray);
graph("sr", xArray, sryArray);