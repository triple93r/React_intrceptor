import React from 'react';
import api from './api';

const Dashboard: React.FC = () => {
const token = localStorage.getItem('authToken');
    
    if (!token) {
        return <p>You are not authenticated. Please login.</p>;
    }
      return (
        <div>
          <h2>Dashboard</h2>
          <p>Welcome to the dashboard!</p>
        </div>
      );
    




};

export default Dashboard;
