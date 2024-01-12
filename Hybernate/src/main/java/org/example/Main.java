package org.example;


import org.example.DAO.StudentDAO;
import org.example.DAO.StudentDAOImpl;
import org.example.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Configuration config  = new Configuration();
        config.addAnnotatedClass(Student.class);

        SessionFactory sessionFactory = config.buildSessionFactory();

        try (sessionFactory) {
            StudentDAO studentDAO = new StudentDAOImpl(sessionFactory);
            Student s = new Student();
            s.setStudentName("mihir");

            studentDAO.saveStudent(s);

            List<Student> students = studentDAO.getAllStudents();
            System.out.println("students" + students.toString());

            Student studentUpdate = studentDAO.getStudentById(1);
            System.out.println("Updating student " + studentUpdate);
            if (studentUpdate != null) {
                studentUpdate.setStudentName("Mihir Hdavani");
                studentDAO.updateStudent(studentUpdate);
            }

            Student updatedStudent = studentDAO.getStudentById(1);
            System.out.println("Updated student = " + updatedStudent);

            studentDAO.deleteStudent(1);
            System.out.println("Deleting student with id = " + 2);
            List<Student> studentsAfterDelete = studentDAO.getAllStudents();
            System.out.println("Students: " + studentsAfterDelete.toString());
        }
    }
}