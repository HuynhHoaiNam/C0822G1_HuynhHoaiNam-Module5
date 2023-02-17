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
    @Query(value = "select * from medical_file where flag= false", nativeQuery = true)
    List<MedicalFile> getAll();

    @Modifying
    @Query(value = "update medical_file set flag=true where id= :id", nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Modifying
    @Query(value = "INSERT INTO `hospital-be`.`medical_file` (`id`, `doctor`, `flag`, `hospital_discharge_date`, `hospitalized_day`, `medical_record_code`, `patient_code`, `patient_name`, `reason`, `treatments`) VALUES (?, ?, ?, ?, ?, ?,? , ?, ?,? )", nativeQuery = true)
    void create(MedicalFile medicalFile);

    @Modifying
    @Query(value = "update medical_file set doctor= :doctor,flag= :flag,hospital_discharge_date= :hospitalDischargeDate,hospitalized_day= :hospitalizedDay,medical_record_code= :medicalRecordCode,patient_code= :patientCode,patient_name= :patientName,reason= :reason,treatments= :treatments where id= :id;", nativeQuery = true)
    void update(@Param("doctor") String doctor, @Param("flag") boolean flag, @Param("hospitalDischargeDate") String hospitalDischargeDate, @Param("hospitalizedDay") String hospitalizedDay, @Param("medicalRecordCode") String medicalRecordCode, @Param("patientCode") String patientCode, @Param("reason") String reason, @Param("treatments") String treatments, @Param("id") Integer id);
}
