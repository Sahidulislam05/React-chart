import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Alice", physics: 78, chemistry: 85, math: 92 },
  { id: 2, name: "Bob", physics: 64, chemistry: 73, math: 58 },
  { id: 3, name: "Charlie", physics: 91, chemistry: 88, math: 79 },
  { id: 4, name: "Diana", physics: 55, chemistry: 62, math: 70 },
  { id: 5, name: "Eve", physics: 83, chemistry: 77, math: 80 },
  { id: 6, name: "Frank", physics: 69, chemistry: 54, math: 73 },
  { id: 7, name: "Grace", physics: 88, chemistry: 94, math: 90 },
  { id: 8, name: "Hank", physics: 47, chemistry: 51, math: 60 },
  { id: 9, name: "Ivy", physics: 76, chemistry: 82, math: 85 },
  { id: 10, name: "Jack", physics: 59, chemistry: 66, math: 71 },
];

const ResultCharts = () => {
  return (
    <div className="container mx-auto my-10">
      <LineChart width={1100} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>

        <Line dataKey="math"> </Line>
        <Line dataKey="chemistry" stroke="green"></Line>
      </LineChart>
    </div>
  );
};

export default ResultCharts;
