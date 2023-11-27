// src/components/BalanceOverview.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styling/BalanceOverview.css';

const BalanceOverview = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartData = {
      labels: ['Income', 'Expenses'],
      datasets: [
        {
          data: [5000, 3000], // Placeholder values, replace with actual data later
          backgroundColor: ['#36a2eb', '#ff6384'],
        },
      ],
    };

    const chartConfig = {
      type: 'doughnut',
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    };

    const myChart = new Chart(chartRef.current, {
      type: chartConfig.type,
      data: chartData,
      options: chartConfig.options,
    });

    return () => {
      myChart.destroy();
    };
  }, []); // Empty dependency array

  return (
    <div className="balance-overview">
      <h2>Balance Overview</h2>
      <div className="chart-container">
        <canvas ref={chartRef} width="200" height="200"></canvas>
      </div>
    </div>
  );
};

export default BalanceOverview;
