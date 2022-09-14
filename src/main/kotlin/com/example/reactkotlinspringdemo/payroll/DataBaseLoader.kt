package com.example.reactkotlinspringdemo.payroll

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DataBaseLoader(@Autowired val repository: EmployeeRepository) : CommandLineRunner {
    override fun run(vararg args: String?) {
        this.repository.save(Employee("Frodo", "Baggins", "ring bearer"))
    }
}
