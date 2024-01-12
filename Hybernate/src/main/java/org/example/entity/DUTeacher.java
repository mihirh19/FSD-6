package org.example.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class DUTeacher {

    @Id @GeneratedValue
    private long teacherId;


    @Column(name = "Teacher_name")
    private String teacherName;

    public long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(long teacherId) {
        this.teacherId = teacherId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public Set<DUStudent> getDuStudents() {
        return duStudents;
    }

    public void setDuStudents(Set<DUStudent> duStudents) {
        this.duStudents = duStudents;
    }

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "JOIN_STUDENT_TEACHER",
            inverseJoinColumns = {@JoinColumn(name = "Student_ID_FK")},
            joinColumns = {@JoinColumn(name = "Teacher_Id_FK")})
    private Set<DUStudent> duStudents;
}
