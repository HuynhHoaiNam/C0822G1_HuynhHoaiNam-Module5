package com.codegym.hospital.repository;

import com.codegym.hospital.model.MedicalFile;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface IMedicalFileRepository extends JpaRepository<MedicalFile, Integer> {

    //Nếu trả về 1 gtri thì bo @Modifying.
    @Query(value = "select * from medical_file where id = :id", nativeQuery = true)
    MedicalFile findByIdMedicalFile(@Param("id") Integer id);

    @Modifying
    @Query(value = "select * from medical_file where flag= false limit ?1,1", nativeQuery = true)
    List<MedicalFile> getAll(int index);

    @Modifying
    @Query(value = "update medical_file set flag=true where id= :id", nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Modifying
    @Query(value = "INSERT INTO `hospital-be`.`medical_file` (`id`, `doctor`, `flag`, `hospital_discharge_date`, `hospitalized_day`, `medical_record_code`, `patient_code`, `patient_name`, `reason`, `treatments`) VALUES (?, ?, ?, ?, ?, ?,? , ?, ?,? )", nativeQuery = true)
    void create(MedicalFile medicalFile);

    @Modifying
    @Query(value = "update medical_file set doctor= ?1,flag= ?2,hospital_discharge_date= ?3,hospitalized_day= ?4,medical_record_code= ?5,patient_code= ?6,patient_name= ?7,reason= ?8,treatments= ?9 where id= ?10;", nativeQuery = true)
    void update(String doctor, boolean flag, String hospitalDischargeDate, String hospitalizedDay, String medicalRecordCode, String patientCode, String patientName, String reason, String treatments, int id);
}
