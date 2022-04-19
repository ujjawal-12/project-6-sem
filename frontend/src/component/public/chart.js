import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
  },
};

const labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];

export const data = {
  labels,
  datasets: [
    {
      id: 1,
      label: 'Yearly Placement Percentage(%)',
      data: [40,45,55,40,57,69,75],
      backgroundColor: 'rgba(93, 109, 184, 0.712)',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
