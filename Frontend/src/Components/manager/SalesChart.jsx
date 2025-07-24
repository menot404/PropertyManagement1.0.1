import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SalesChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Ventes: ${context.raw.toLocaleString('fr-FR')} FCFA`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return `${(value / 1000000).toFixed(1)}M`;
          }
        },
        title: {
          display: true,
          text: 'Montant (FCFA)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Mois'
        }
      }
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Ventes mensuelles',
        data: data.values,
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(59, 130, 246)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(59, 130, 246)',
        tension: 0.3,
        fill: true
      }
    ]
  };

  return <Line data={chartData} options={options} />;
};

export default SalesChart;