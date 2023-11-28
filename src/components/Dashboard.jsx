import React from 'react';
import BalanceOverview from './BalanceOverview';
import RecentTransactions from './RecentTransactions';
import ExpenseCategory from './ExpenseCategory';
import '../styling/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <BalanceOverview />
            <RecentTransactions />
            <ExpenseCategory />
            {/* Add other dashboard components here */}
        </div>
    );
};

export default Dashboard;