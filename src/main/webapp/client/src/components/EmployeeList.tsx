import * as React from "react";
import {FC} from "react";
import {EmployeeModel} from "../models/employee.model";
import Employee from "./Employee";
import "./styles/EmployeeList.scss";

interface EmployeeListProps {
    employees: EmployeeModel[];
}

const EmployeeList: FC<EmployeeListProps> = ({employees}) => {
    const renderEmployee = employees.map(employee => (<Employee key={employee.lastName} employee={employee}/>))
    return (
        <table className="employee-table">
            <thead>
            <tr className="class-uses">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {renderEmployee}
            </tbody>
        </table>
    );
};

export default EmployeeList;
