import * as React from "react";
import {useEffect, useState} from "react";
import {EmployeeModel, EmployeeResponse} from "../models/employee.model";
import EmployeeList from "./EmployeeList";

const App = () => {
    const [employees, setEmployees] = useState<EmployeeModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/api/employees');
            return await data.json();
        };

        fetchData()
            .then((response: EmployeeResponse) => {
                setEmployees(response._embedded.employees);
            })
            .catch(console.error);
    }, []);

    return <EmployeeList employees={employees}/>;
};

export default App;
