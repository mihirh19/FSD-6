package org.example.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class DUCollege {

    @Id @GeneratedValue
    private long CollegeId;

    @Column(name = "College_name")
    private String collegeName;


    public List<DUStudent> getDuStudents() {
        return duStudents;
    }

    public void setDuStudents(List<DUStudent> duStudents) {
        this.duStudents = duStudents;
    }

    @OneToMany(mappedBy = "duCollege",
            cascade = CascadeType.ALL,
            fetch = FetchType.EAGER
    )
    private List<DUStudent> duStudents;

    public long getCollegeId() {
        return CollegeId;
    }

    public void setCollegeId(long collegeId) {
        CollegeId = collegeId;
    }

    public String getCollegeName() {
        return collegeName;
    }

    public void setCollegeName(String collegeName) {
        this.collegeName = collegeName;
    }
}
