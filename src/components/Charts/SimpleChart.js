import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SimpleChart() {
  const data = [
    { nome: "T-01", cpu: 40, memoria: 24, energia: 55 },
    { nome: "T-02", cpu: 30, memoria: 25, energia: 57 },
    { nome: "T-03", cpu: 50, memoria: 36, energia: 54 },
    { nome: "T-04", cpu: 70, memoria: 39, energia: 60 },
    { nome: "T-05", cpu: 45, memoria: 48, energia: 68 },
    { nome: "T-06", cpu: 56, memoria: 52, energia: 63 },
    { nome: "T-07", cpu: 68, memoria: 40, energia: 59 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            border: "1px solid #0cff0c",
            borderRadius: "4px",
            padding: "10px",
            boxShadow: "0 0 10px rgba(12, 255, 12, 0.2)",
            fontFamily: "Rajdhani, sans-serif",
          }}
        >
          <p
            className="label"
            style={{ color: "#0cff0c", marginBottom: "5px" }}
          >{`${label}`}</p>
          {payload.map((entry, index) => (
            <p
              key={`item-${index}`}
              style={{ color: entry.color, margin: "3px 0" }}
            >
              {`${entry.name}: ${entry.value}%`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(12, 255, 12, 0.1)"
          />
          <XAxis
            dataKey="nome"
            stroke="#e0e0e0"
            tick={{ fill: "#e0e0e0" }}
            axisLine={{ stroke: "rgba(12, 255, 12, 0.3)" }}
          />
          <YAxis
            stroke="#e0e0e0"
            tick={{ fill: "#e0e0e0" }}
            axisLine={{ stroke: "rgba(12, 255, 12, 0.3)" }}
            tickLine={{ stroke: "rgba(12, 255, 12, 0.3)" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              fontFamily: "Orbitron, sans-serif",
              color: "#e0e0e0",
              fontSize: "0.8rem",
            }}
          />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#0cff0c"
            activeDot={{
              r: 8,
              fill: "#0cff0c",
              stroke: "transparent",
              strokeWidth: 0,
            }}
            strokeWidth={2}
            dot={{ fill: "#0cff0c", r: 4, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="memoria"
            stroke="#00aeff"
            activeDot={{
              r: 8,
              fill: "#00aeff",
              stroke: "transparent",
              strokeWidth: 0,
            }}
            strokeWidth={2}
            dot={{ fill: "#00aeff", r: 4, strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="energia"
            stroke="#ffcc00"
            activeDot={{
              r: 8,
              fill: "#ffcc00",
              stroke: "transparent",
              strokeWidth: 0,
            }}
            strokeWidth={2}
            dot={{ fill: "#ffcc00", r: 4, strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SimpleChart;
