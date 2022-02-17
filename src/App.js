import React from "react";
import { useState } from "react";
import AddEmployee from "./components/Employees/AddEmployee";
import EmployeesList from "./components/Employees/EmployeesList";

function App() {
  const [employeesList, setEmployeesList] = useState([]);

  const addEmployeeHandler = (eName, eId) => {
    setEmployeesList((oldEmployeesList) => {
      return [...oldEmployeesList, { name: eName, id: eId }];
    });
  };

  return (
    <>
      <div id="error-modal-backdrop"></div>
      <div id="error-modal-message"></div>
      <AddEmployee onAddEmployee={addEmployeeHandler} />
      <EmployeesList employees={employeesList}></EmployeesList>
    </>
  );
}

export default App;
