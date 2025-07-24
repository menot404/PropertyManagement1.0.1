import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PropertyTypeChart = ({ data }) => {
  const colors = [
    'rgba(59, 130, 246, 0.7)',   // Bleu
    'rgba(16, 185, 129, 0.7)',   // Vert
    'rgba(245, 158, 11, 0.7)',   // Jaune
    'rgba(139, 92, 246, 0.7)',   // Violet
  ];

  const chartData = {
    labels: data.map(item => item.type),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.7', '1')),
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 12
          },
          generateLabels: (chart) => {
            const datasets = chart.data.datasets;
            return chart.data.labels.map((label, i) => {
              const value = datasets[0].data[i];
              const percentage = Math.round((value / datasets[0].data.reduce((a, b) => a + b, 0)) * 100);
              
              return {
                text: `${label}: ${value.toLocaleString('fr-FR')} FCFA (${percentage}%)`,
                fillStyle: datasets[0].backgroundColor[i],
                strokeStyle: datasets[0].borderColor[i],
                lineWidth: 1,
                hidden: false,
                index: i
              };
            });
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value.toLocaleString('fr-FR')} FCFA`;
          }
        }
      }
    }
  };

  return <Pie data={chartData} options={options} />;
};

export default PropertyTypeChart;