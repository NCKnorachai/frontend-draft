import React from 'react';
import "../style/members1.css";
import Switch from "@mui/material/Switch";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    AV: 3300,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    AV: 3100,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 2000,
    AV: 3560,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    AV: 3230,
  },
];
export default function Members1() {
  return (
    <div><div className="member-group-wrapper-sw">
    <div className="member-slid-group-conten-sw">
      <div className="member-slid-switch">
        <div className="member-group-switch-text-content1">
          <div className="member-group-switch-content1">
            <div className="member-group-switch-content1-switcw1">
              <Switch {..."Test"} defaultChecked />
              <p>จำนวนการนัดหมายรายสัปดาห์</p>
            </div>
          </div>
        </div>
        <div className="member-group-switch-text-content2">
          <div className="member-group-switch-content2">
            <div className="member-group-switch-content2-switcw2">
              <Switch {..."Test"} defaultChecked className="switch" />
              <p>จำนวนการนัดหมายโดยเฉลี่ย</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="member-group-flex">
    <div className="member-group-chart1">
      <BarChart width={500} height={350} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
    <div className="member-group-chart2">
      <LineChart
        width={550}
        height={350}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="AV" stroke="#e21212" />
      </LineChart>
    </div>
  </div></div>
  )
}

