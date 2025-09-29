import { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  //   console.log(marksData);

  // Data processing for the chart

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });
  console.log(marksChartData);
  return (
    <div className="container mx-auto my-10">
      <BarChart width={800} height={500} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="blue"></Bar>
        <Bar dataKey="physics" fill="skyBlue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
