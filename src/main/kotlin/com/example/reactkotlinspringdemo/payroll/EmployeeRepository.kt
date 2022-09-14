package com.example.reactkotlinspringdemo.payroll

import org.springframework.data.repository.CrudRepository

interface EmployeeRepository : CrudRepository<Employee, Long> {
}
