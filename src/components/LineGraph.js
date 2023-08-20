import React from "react";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   maintainAspectRatio: false, // This allows the chart to not maintain aspect ratio
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Line Chart",
//     },
//   },
// };

// const covidData = {
//   labels: [
//     "1/22/20",
//     "3/23/20",
//     "6/23/20",

//     "9/22/20",
//     "12/23/20",
//     "1/23/21",
//     "3/22/21",
//     "6/23/21",
//     "9/23/21",
//     "12/23/21",
//     "1/23/22",
//     "3/22/22",
//     "6/23/22",
//     "9/23/22",
//     "12/23/22",
//     // ... add more dates here
//   ],
//   cases: [
//     557,
//     657,
//     944,
//     8237,
//     78665,
//     777777,
//     1000000,
//     2000000,
//     3000000,
//     4000000,
//     5000000,
//     6000000,
//     7000000,
//     80000000, // ... add more case counts here
//   ],
// };

// export const data = {
//   labels: covidData.labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: covidData.cases,
//       //   data: staticDataset1Data,
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

// const LineGraph = () => {
//   return (
//     <div className="w-80vw h-[450px]">
//       {" "}
//       {/* Apply Tailwind CSS class for width */}
//       <Line options={options} data={data} />
//     </div>
//   );
// };

// export default LineGraph;

// import { Line } from "react-chartjs-2";

// const LineGraph = () => {
//   const [covidData, setCovidData] = useState({ labels: [], cases: [] });

//   useEffect(() => {
//     // Fetch data from your API
//     fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
//       .then((response) => response.json())
//       .then((data) => {
//         const casesData = data.cases; // Replace with the actual data key

//         const labels = Object.keys(casesData);
//         const cases = Object.values(casesData);

//         setCovidData({ labels, cases });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   const data = {
//     labels: covidData.labels,
//     datasets: [
//       {
//         label: "COVID-19 Cases",
//         data: covidData.cases,
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         fill: true, // Fill the area under the line
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "COVID-19 Cases Over Time",
//       },
//     },
//   };

//   return (
//     <div className="w-full h-[450px]">
//       <Line options={options} data={data} />
//     </div>
//   );
// };

// export default LineGraph;
const LineGraph = () => {
  const [covidData, setCovidData] = useState({
    labels: [],
    cases: [],
    deaths: [],
  });

  useEffect(() => {
    // Fetch data from your API
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((response) => response.json())
      .then((data) => {
        const casesData = data.cases;
        const deathsData = data.deaths; // Add this line to fetch deaths data

        const labels = Object.keys(casesData);
        const cases = Object.values(casesData);
        const deaths = Object.values(deathsData); // Add this line to get deaths values

        setCovidData({ labels, cases, deaths });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const data = {
    labels: covidData.labels,
    datasets: [
      {
        label: "COVID-19 Cases",
        data: covidData.cases,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
      },
      {
        label: "COVID-19 Deaths", // Add a label for deaths
        data: covidData.deaths, // Use the deaths data
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "COVID-19 Cases and Deaths Over Time",
      },
    },
  };

  return (
    <div className="w-full h-[450px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineGraph;
