import react from "react";
import Card from "../Card";

const AddEmployee = (props) => {
  const addEmployeeHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card>
      <form onSubmit={addEmployeeHandler}>
        <label htmlFor="employeesname">Employee's Name</label>
        <input id="employeesname" type="text"></input>
        <label htmlFor="employeesid">Enter Id</label>
        <input id="employeesid" type="number"></input>
        <button type="submit">Add Employee</button>
      </form>
    </Card>
  );
};

export default AddEmployee;
