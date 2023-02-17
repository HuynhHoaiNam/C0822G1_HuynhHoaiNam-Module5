package com.codegym.hospital.service.medical_file;

import com.codegym.hospital.model.MedicalFile;
import org.springframework.data.repository.query.Param;


import java.util.List;


public interface IMedicalFileService {
    List<MedicalFile> getAll();

    MedicalFile findByIdMedicalFile(Integer id);

    void deleteById(int id);

    void create(MedicalFile medicalFile);

    void update(String doctor, boolean flag, String hospitalDischargeDate,String hospitalizedDay,String medicalRecordCode, String patientCode, String reason, String treatments, Integer id);
}
