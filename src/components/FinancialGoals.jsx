// src/components/FinancialGoals.jsx
import React from 'react';
import '../styling/FinancialGoals.css';

const FinancialGoals = () => {
  // Sample Data
  const financialGoals = [
    { goal: 'Emergency Fund', target: 5000, current: 2500 },
    { goal: 'Vacation Fund', target: 3000, current: 1000 },
  ];

  return (
    <div className="tile financial-goals">
      <h2>Financial Goals</h2>
      <ul>
        {financialGoals.map((goal, index) => (
          <li key={index}>
            <div className="goal-info">
              <span>{goal.goal}</span>
              <span>
                {goal.current} / {goal.target}
              </span>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{
                  width: `${(goal.current / goal.target) * 100}%`,
                  backgroundColor: goal.current >= goal.target ? '#4caf50' : '#3498db',
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialGoals;
