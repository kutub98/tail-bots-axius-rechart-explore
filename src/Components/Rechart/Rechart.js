import React from 'react';
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import './Rechart.css'
const Rechart = () => {
    const data = [
        {
          name: "Assignment one",
          uv: 60,
          Marks: 2400,
          amt: 2400
        },
        {
          name: "Assignment two",
          uv: 60,
          Marks: 1398,
          amt: 2210
        },
        {
          name: "Assignment three",
          uv: 58,
          Marks: 9800,
          amt: 2290
        },
        {
          name: "Assignment four",
          uv: 58,
          Marks: 3908,
          amt: 2000
        },
        {
          name: "Assignment five",
          Marks: 55,
          Marks: 4800,
          amt: 2181
        },
        {
          name: "Assignment six",
          Marks: 38,
          Marks: 3800,
          amt: 2500
        },
        {
          name: "Assignment seven",
          uv: 60,
          Marks: 4300,
          amt: 2100
        }
      ];
    return (
        <LineChart width={1000} height={350} data={data} 
        margin={{
          top: 5,
          right: 200,
          left: 200,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="marks"/>
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Marks"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone"dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    );
};

export default Rechart;
