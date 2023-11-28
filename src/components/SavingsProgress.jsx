import React from 'react';
import '../styling/SavingsProgress.css';

const SavingsProgress = () => {
  // Sample Data
  const totalSavings = 10000; // Total savings goal
  const savedAmount = 4862; // Amount saved so far

  // Calculate savings progress percentage
  const progressPercentage = (savedAmount / totalSavings) * 100;

  return (
    <div className="tile savings-progress">
      <h2>Savings Progress</h2>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="savings-info">
        <span>Saved: ${savedAmount}</span>
        <span>Total Savings Goal: ${totalSavings}</span>
      </div>
    </div>
  );
};

export default SavingsProgress;
