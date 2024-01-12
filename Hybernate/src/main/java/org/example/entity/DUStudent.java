package org.example.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class DUStudent {
    @Id @GeneratedValue
    private long DUId;

    @Column(name = "DU_name")
    private String DUname;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "COLLEGE_FK")
    private DUCollege duCollege;



    @ManyToMany(cascade = CascadeType.ALL,
    fetch = FetchType.EAGER)
    @JoinTable(name = "JOIN_STUDENT_TEACHER",
    joinColumns = {@JoinColumn(name = "Student_ID_FK")},
    inverseJoinColumns = {@JoinColumn(name = "Teacher_Id_FK")})
    private Set<DUTeacher> duTeachers;

    public Adhhar getAdhhar() {
        return adhhar;
    }

    public void setAdhhar(Adhhar adhhar) {
        this.adhhar = adhhar;
    }

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "DUAdhar_FK")
    private Adhhar adhhar;



    public Set<DUTeacher> getDuTeachers() {
        return duTeachers;
    }

    public void setDuTeachers(Set<DUTeacher> duTeachers) {
        this.duTeachers = duTeachers;
    }

    public long getDUId() {
        return DUId;
    }

    public void setDUId(long DUId) {
        this.DUId = DUId;
    }

    public String getDUname() {
        return DUname;
    }

    public void setDUname(String DUname) {
        this.DUname = DUname;
    }

    public DUCollege getDuCollege() {
        return duCollege;
    }

    public void setDuCollege(DUCollege duCollege) {
        this.duCollege = duCollege;
    }
}
