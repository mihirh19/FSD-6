package org.example;

import org.example.entity.Adhhar;
import org.example.entity.DUCollege;
import org.example.entity.DUStudent;
import org.example.entity.DUTeacher;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.HashSet;
import java.util.Set;

public class Main2 {
    public static void main(String[] args) {
        Configuration configuration = new Configuration();
        configuration.configure();
        configuration.addAnnotatedClass(DUStudent.class);
        configuration.addAnnotatedClass(DUCollege.class);
        configuration.addAnnotatedClass(DUTeacher.class);
        configuration.addAnnotatedClass(Adhhar.class);

        SessionFactory sessionFactory = configuration.buildSessionFactory();

        try (sessionFactory){
            Session session = sessionFactory.openSession();
            session.getTransaction().begin();


            DUStudent st1 = new DUStudent();
            DUStudent st2 = new DUStudent();

            DUCollege duCollege = new DUCollege();


            Adhhar ad1 = new Adhhar();
            Adhhar ad2 = new Adhhar();

            Set<DUTeacher> duTeacherSet = new HashSet<>();
            DUTeacher t1 = new DUTeacher();
            DUTeacher t2 = new DUTeacher();
            duTeacherSet.add(t1);
            duTeacherSet.add(t2);




            st1.setDUname("mihir");
            st2.setDUname("abhay");
            duCollege.setCollegeName("DDU");

            ad1.setAdhharNum(52);
            ad2.setAdhharNum(80);

            t1.setTeacherName("HBP");
            t2.setTeacherName("SRS");

            st1.setAdhhar(ad1);
            st2.setAdhhar(ad2);

            st1.setDuCollege(duCollege);
            st2.setDuCollege(duCollege);


            st1.setDuTeachers(duTeacherSet);
            st2.setDuTeachers(duTeacherSet);

            session.persist(st1);
            session.persist(st2);

            session.getTransaction().commit();


            session.close();

        }
    }
}
