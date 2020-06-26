import React from 'react';

import Header from './../../components/Header/header'

import './dashboard.css';

const Dashboard = () => (
    <div className="dashBor">
        <Header />
        <div className="dashboard">
            <div className="box1">
                <h3>Data Ingestion</h3>
            </div>
            <div className="box1">
                <h3>Data Transformation</h3>
            </div>
            <div className="box1">
                <h3>Data Anonymization</h3>
            </div>
        </div>

    </div>
);

export default Dashboard;