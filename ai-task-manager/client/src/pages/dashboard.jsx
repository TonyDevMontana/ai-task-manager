import React from 'react';
import { CreateEmployee } from '../components/create-empl/create-employee';
import { AssignTask } from '../components/assign-task/assign-task';

const Dashboard = () => {
  return (
    <div>
      <div>Dashboard :</div>

      <div>
        <CreateEmployee />
      </div>
      <div>
        <AssignTask />
      </div>
    </div>
  );
};

export default Dashboard;
