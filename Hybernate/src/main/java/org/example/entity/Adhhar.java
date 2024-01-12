package org.example.entity;

import jakarta.persistence.*;

@Entity
public class Adhhar {

    @Id @GeneratedValue
    private long adhharId;

    @Column(name = "Adhhar_num")
    private int adhharNum;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "adhhar")
    private DUStudent duStudent;

    public long getAdhharId() {
        return adhharId;
    }

    public int getAdhharNum() {
        return adhharNum;
    }

    public void setAdhharNum(int adhharNum) {
        this.adhharNum = adhharNum;
    }

    public DUStudent getDuStudent() {
        return duStudent;
    }

    public void setDuStudent(DUStudent duStudent) {
        this.duStudent = duStudent;
    }

    public void setAdhharId(long adhharId) {
        this.adhharId = adhharId;
    }
}
