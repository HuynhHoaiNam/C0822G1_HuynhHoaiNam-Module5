package com.c0822g1primaryschoolbe.entity.time_table_subject;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subjectId;
    @Column(columnDefinition = "varchar(45)")
    private String subjectName;
    @OneToMany(mappedBy = "subject")
    @JsonBackReference
    private Set<TimeTableSubject> timeTableSubjectSet;

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public Set<TimeTableSubject> getTimeTableSubjectSet() {
        return timeTableSubjectSet;
    }

    public void setTimeTableSubjectSet(Set<TimeTableSubject> timeTableSubjectSet) {
        this.timeTableSubjectSet = timeTableSubjectSet;
    }
}
