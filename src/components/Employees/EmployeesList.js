import react from "react";
import styles from "./EmployeesList.module.css";
import Card from "../UI/Card";

const EmployeesList = (props) => {
  return (
    <Card className={styles.employees}>
      <ul>
        {props.employees.map((employee) => (
          <li>
            {employee.name} (Id number: {employee.id})
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default EmployeesList;
