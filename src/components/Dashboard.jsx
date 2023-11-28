import React from 'react';
import BalanceOverview from './BalanceOverview';
import RecentTransactions from './RecentTransactions';
import '../styling/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <BalanceOverview />
            <RecentTransactions />
            {/* Add other dashboard components here */}
        </div>
    );
};

export default Dashboard;