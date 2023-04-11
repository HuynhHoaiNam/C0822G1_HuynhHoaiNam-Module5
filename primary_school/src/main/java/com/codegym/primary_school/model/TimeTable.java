package com.c0822g1primaryschoolbe.entity.time_table_subject;

import com.c0822g1primaryschoolbe.entity.clazz.Clazz;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class TimeTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long timeTableId;
    private Integer lesson;
    @OneToMany(mappedBy = "timeTable")
    @JsonBackReference
    private Set<TimeTableSubject> timeTableSubjectSet;
    @OneToOne(mappedBy = "timeTable")
    private Clazz clazz;
    @ManyToOne
    @JoinColumn(name = "day_id",nullable = false,referencedColumnName = "day_id")
    private Day dayOfWeek;
    @ManyToOne
    @JoinColumn(name = "lesson_id", nullable = false,referencedColumnName = "lesson_id")
    private Lesson lessonTable;

    public Long getTimeTableId() {
        return timeTableId;
    }

    public void setTimeTableId(Long timeTableId) {
        this.timeTableId = timeTableId;
    }

    public Integer getLesson() {
        return lesson;
    }

    public void setLesson(Integer lesson) {
        this.lesson = lesson;
    }

    public Set<TimeTableSubject> getTimeTableSubjectSet() {
        return timeTableSubjectSet;
    }

    public void setTimeTableSubjectSet(Set<TimeTableSubject> timeTableSubjectSet) {
        this.timeTableSubjectSet = timeTableSubjectSet;
    }

    public Clazz getClazz() {
        return clazz;
    }

    public void setClazz(Clazz clazz) {
        this.clazz = clazz;
    }

    public Day getDayOfWeek() {
        return dayOfWeek;
    }

    public void setDayOfWeek(Day dayOfWeek) {
        this.dayOfWeek = dayOfWeek;
    }

    public Lesson getLessonTable() {
        return lessonTable;
    }

    public void setLessonTable(Lesson lessonTable) {
        this.lessonTable = lessonTable;
    }
}
