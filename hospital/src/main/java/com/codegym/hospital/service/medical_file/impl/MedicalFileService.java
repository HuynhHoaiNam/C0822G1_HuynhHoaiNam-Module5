package com.codegym.hospital.service.medical_file.impl;

import com.codegym.hospital.model.MedicalFile;
import com.codegym.hospital.repository.IMedicalFileRepository;
import com.codegym.hospital.service.medical_file.IMedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MedicalFileService implements IMedicalFileService {

    @Autowired
    private IMedicalFileRepository iMedicalFileRepository;

    @Override
    public List<MedicalFile> getAll() {
        return iMedicalFileRepository.getAll();
    }

    @Override
    public void deleteById(int id) {
        iMedicalFileRepository.deleteById(id);
    }

    @Override
    public void create(MedicalFile medicalFile) {
        iMedicalFileRepository.create(medicalFile);
    }

    @Override
    public MedicalFile findById(int id) {
        return iMedicalFileRepository.findById(id);
    }

    @Override
    public void update(String doctor, boolean flag, String hospital_discharge_date, String hospitalized_day, String medical_record_code, String patient_code, String reason, String treatments, Integer id) {
        iMedicalFileRepository.update(doctor,  flag,  hospital_discharge_date,  hospitalized_day,  medical_record_code,  patient_code, reason, treatments, id);
    }
}
