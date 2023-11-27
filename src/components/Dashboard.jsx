import React from 'react';
import BalanceOverview from './BalanceOverview';
import '../styling/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <BalanceOverview />
            {/* Add other dashboard components here */}
        </div>
    );
};

export default Dashboard;