import react from "react";
import styles from "./AddEmployee.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddEmployee = (props) => {
  const inputNameRef = useRef();
  const inputIdRef = useRef();

  const [error, setError] = useState();

  const addEmployeeHandler = (event) => {
    event.preventDefault();
    const enteredName = inputNameRef.current.value;
    const enteredId = inputIdRef.current.value;

    if (enteredName.trim().length === 0 || enteredId.trim().length === 0) {
      setError({
        title: "Invalid Input!",
        message: "Please enter a valid Name and Id!!",
      });
      return;
    }

    props.onAddEmployee(enteredName, enteredId);
    inputNameRef.current.value = "";
    inputIdRef.current.value = "";
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
          <input id="employeesname" type="text" ref={inputNameRef}></input>
          <label htmlFor="employeesid">Enter Id</label>
          <input id="employeesid" type="number" ref={inputIdRef}></input>
          <Button type="submit">Add Employee</Button>
        </form>
      </Card>
    </>
  );
};

export default AddEmployee;
