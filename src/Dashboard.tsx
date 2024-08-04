import React from 'react';
import { useLocation } from "react-router-dom";

const Dashboard= (_props: any) => {
    const location = useLocation();

    const name = location.state.name;
    const job = location.state.job;

    
    return (
      <>
        <h3>Employee Details</h3>
        <h2>User Name - {name}</h2>
        <h2>Job Name - {job}</h2>
      </>
    );
  };
export default Dashboard;