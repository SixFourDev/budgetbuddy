import React from 'react';
import '../styling/RecentTransactions.css';

const RecentTransactions = () => {
  // Sample Data
  const recentTransactions = [
    { description: 'Shopping', amount: -110.18, date: '11-27-2023', type: 'shopping' },
    { description: 'Mortgage', amount: -1950.54, date: '11-27-2023', type: 'rent/mortgage' },
    { description: 'Groceries', amount: -76.48, date: '11-27-2023', type: 'groceries' },
    { description: 'Salary', amount: 5000, date: '11-22-2023', type: 'salary' },
  ];

  return (
    <div className="tile recent-transactions">
      <h2>Recent Transactions</h2>
      <ul>
        {recentTransactions.map((transaction, index) => (
          <li key={index} className="transaction-card">
            <div className="transaction-headers">
              <span>Transaction</span>
              <span>Date</span>
              <span>Amount</span>
            </div>
            <div className="transaction-info">
              <div className="transaction-description">
                {index + 1}. {getTransactionEmoji(transaction.type)} {transaction.description}
              </div>
              <div className="transaction-date">{transaction.date}</div>
              <div className={`transaction-amount ${transaction.amount < 0 ? 'negative' : ''}`}>
                {transaction.amount > 0 ? `$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const getTransactionEmoji = (type) => {
  switch (type) {
    case 'groceries':
      return '🛒';
    case 'salary':
      return '💰';
    case 'rent/mortgage':
      return '🏠';
    case 'shopping':
        return '🛍'  
    default:
      return '🔄';
  }
};

export default RecentTransactions;
