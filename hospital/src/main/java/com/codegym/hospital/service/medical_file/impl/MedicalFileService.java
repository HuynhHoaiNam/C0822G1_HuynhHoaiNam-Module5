package com.codegym.hospital.service.medical_file.impl;

import com.codegym.hospital.model.MedicalFile;
import com.codegym.hospital.repository.IMedicalFileRepository;
import com.codegym.hospital.service.medical_file.IMedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MedicalFileService implements IMedicalFileService {

    @Autowired
    private IMedicalFileRepository iMedicalFileRepository;

    @Override
    public List<MedicalFile> getAll(int index) {
        return iMedicalFileRepository.getAll(index);
    }

    @Override
    public MedicalFile findByIdMedicalFile(Integer id) {
        return iMedicalFileRepository.findByIdMedicalFile(id);
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
    public void update(MedicalFile medicalFile) {
        iMedicalFileRepository.update(medicalFile.getDoctor(), medicalFile.isFlag(), medicalFile.getHospitalDischargeDate(), medicalFile.getHospitalizedDay(), medicalFile.getMedicalRecordCode(), medicalFile.getPatientCode(), medicalFile.getPatientName(), medicalFile.getReason(), medicalFile.getTreatments(), medicalFile.getId());
    }

}
