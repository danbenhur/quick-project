import react from "react";
import styles from "./AddEmployee.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddEmployee = (props) => {
  const [employeeNameInput, changeEmployeeInput] = useState("");
  const [employeeIdInput, changeEmployeeId] = useState("");
  const [error, setError] = useState();

  const addEmployeeHandler = (event) => {
    event.preventDefault();

    if (
      employeeNameInput.trim().length === 0 ||
      employeeIdInput.trim().length === 0
    ) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid Name and Id!",
      });
      return;
    }
    console.log(employeeNameInput, employeeIdInput);
    props.onAddEmployee(employeeNameInput, employeeIdInput);
    changeEmployeeInput("");
    changeEmployeeId("");
  };

  const nameChangeHandler = (event) => {
    changeEmployeeInput(event.target.value);
  };
  const idChangeHandler = (event) => {
    changeEmployeeId(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          removeErrorMessage={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addEmployeeHandler}>
          <label htmlFor="employeesname">Employee's Name</label>
          <input
            id="employeesname"
            type="text"
            value={employeeNameInput}
            onChange={nameChangeHandler}
          ></input>
          <label htmlFor="employeesid">Enter Id</label>
          <input
            id="employeesid"
            type="number"
            onChange={idChangeHandler}
            value={employeeIdInput}
          ></input>
          <Button type="submit">Add Employee</Button>
        </form>
      </Card>
    </>
  );
};

export default AddEmployee;
