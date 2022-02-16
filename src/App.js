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
    <div>
      <AddEmployee onAddEmployee={addEmployeeHandler} />
      <EmployeesList employees={employeesList}></EmployeesList>
    </div>
  );
}

export default App;
