// src/components/ExpenseCategory.jsx
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import '../styling/ExpenseCategory.css';

const ExpenseCategory = () => {
  const expenseCategories = [
    { category: 'Food', amount: 248.54 },
    { category: 'Entertainment', amount: 187.32 },
    { category: 'Utilities', amount: 142.32 },
  ];

  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('expenseChart').getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create a new chart instance
    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: expenseCategories.map((category) => category.category),
        datasets: [
          {
            data: expenseCategories.map((category) => category.amount),
            backgroundColor: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#34495e'],
          },
        ],
      },
    });
  }, [expenseCategories]);

  return (
    <div className="tile expense-category">
      <h2>Expense Categories</h2>
      <div className="chart-container">
        <canvas id="expenseChart"></canvas>
      </div>
    </div>
  );
};

export default ExpenseCategory;
