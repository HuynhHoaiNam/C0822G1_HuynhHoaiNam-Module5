package com.codegym.hospital.service.medical_file;

import com.codegym.hospital.model.MedicalFile;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;

public interface IMedicalFileService {
    List<MedicalFile> getAll();

    void deleteById(int id);

    void create(MedicalFile medicalFile);

    MedicalFile findById(int id);

    void update(String doctor, boolean flag, String hospital_discharge_date, String hospitalized_day, String medical_record_code, String patient_code, String reason, String treatments, Integer id);
}
