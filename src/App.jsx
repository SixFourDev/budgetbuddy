import React from 'react';
import './styling/App.css';
import SideNavigation from './components/SideNavigation';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <div className="app-container">
      <SideNavigation />
      <Dashboard />
    </div>
  );
};

export default App;
