import React from 'react';
import '../styling/SideNavigation.css';

const SideNavigation = () => {
    return (
        <nav className="side-navigation">
            <div className="nav-title">BudgetBuddy</div>
            <div className="nav-item">Dashboard</div>
            <div className="nav-item">Transactions</div>
            <div className="nav-item">Payments</div>
            <div className="nav-item">Budget</div>
        </nav>
    );
};

export default SideNavigation;