package org.example.springrest.service;

import org.example.springrest.entity.Student;

import java.util.List;

public interface StudentService {
    public List<Student> getAllstudents();

    public Student addStudent(Student student);
}
