import * as React from 'react';
import {EmployeeModel} from "../models/employee.model";
import {FC} from "react";

interface EmployeeProps {
    employee: EmployeeModel;
}

const Employee: FC<EmployeeProps> = ({employee}) => {
    return (
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.description}</td>
        </tr>
    );
};

export default Employee;
