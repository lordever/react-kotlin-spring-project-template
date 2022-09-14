export interface EmployeeResponse {
    _embedded: {
        employees: EmployeeModel[]
    };
}

export interface EmployeeModel {
    firstName: string;
    lastName: string;
    description: string;
}
