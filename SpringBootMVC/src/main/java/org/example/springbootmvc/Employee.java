package org.example.springbootmvc;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
public class Employee {
    @Pattern(regexp = "^[a-zA-Z.]+$", message = "employee name should only contain alphabets and dots.")
    private String employeeName;

    @Pattern(regexp = "^[6-9]\\d{9}$", message = "employee enter a valid 10-digit mobile number starting with 6")
    private String employeeContact;

    @Pattern(regexp = "^(Male|Female)", message = "please select a valid gender")
    private String employeeGender;

    
    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getEmployeeContact() {
        return employeeContact;
    }

    public void setEmployeeContact(String employeeContact) {
        this.employeeContact = employeeContact;
    }

    public String getEmployeeGender() {
        return employeeGender;
    }

    public void setEmployeeGender(String employeeGender) {
        this.employeeGender = employeeGender;
    }

}
