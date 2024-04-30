package org.example.springrest;


import org.example.springrest.entity.Student;
import org.example.springrest.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    private StudentService studentService;


    @GetMapping("/")
    public List<Student> getStudents(){
        return studentService.getAllstudents();
    }


    @PostMapping("/")
    public Student addStudent(@RequestBody Student student){
        return studentService.addStudent(student);
    }

}
