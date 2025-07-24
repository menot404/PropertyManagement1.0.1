import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceByAgent = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.agent),
    datasets: [
      {
        label: 'Nombre de ventes',
        data: data.map(item => item.sales),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        yAxisID: 'y'
      },
      {
        label: 'Valeur des ventes (millions)',
        data: data.map(item => item.value / 1000000),
        backgroundColor: 'rgba(16, 185, 129, 0.7)',
        type: 'line',
        yAxisID: 'y1',
        borderColor: 'rgba(16, 185, 129)',
        borderWidth: 3,
        pointBackgroundColor: 'rgba(16, 185, 129)',
        pointBorderColor: '#fff',
        pointRadius: 5
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Nombre de ventes'
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Valeur (millions FCFA)'
        },
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: function(value) {
            return `${value}M`;
          }
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (context.datasetIndex === 0) {
                label += context.parsed.y;
              } else {
                label += `${context.parsed.y.toLocaleString('fr-FR')} FCFA`;
              }
            }
            return label;
          }
        }
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default PerformanceByAgent;