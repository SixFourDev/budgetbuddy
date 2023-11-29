import React from 'react';
import BalanceOverview from './BalanceOverview';
import RecentTransactions from './RecentTransactions';
import ExpenseCategory from './ExpenseCategory';
import SavingsProgress from './SavingsProgress';
import FinancialGoals from './FinancialGoals';
import '../styling/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <BalanceOverview />
            <RecentTransactions />
            <ExpenseCategory />
            <SavingsProgress />
            <FinancialGoals />
            {/* Add other dashboard components here */}
        </div>
    );
};

export default Dashboard;