package com.codegym.hospital.controller;

import com.codegym.hospital.model.MedicalFile;
import com.codegym.hospital.service.medical_file.impl.MedicalFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("*")
public class RestHospitalController {
    @Autowired
    private MedicalFileService medicalFileService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<MedicalFile>> listMedicalFile() {
        List<MedicalFile> medicalFileList = medicalFileService.getAll();
        if (medicalFileList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(medicalFileList, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<MedicalFile> deleteMedicalFile(@PathVariable("id") int id) {
        medicalFileService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @PutMapping(value = "/update")
    public ResponseEntity<?> updateMedicalFile(@RequestBody MedicalFile medicalFile) {
        medicalFileService.update(medicalFile.getDoctor(), medicalFile.isFlag(), medicalFile.getHospitalDischargeDate(), medicalFile.getHospitalizedDay(), medicalFile.getMedicalRecordCode(), medicalFile.getPatientCode(), medicalFile.getReason(), medicalFile.getTreatments(), medicalFile.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<MedicalFile> createMedicalFile(@ModelAttribute("medicalFile") MedicalFile medicalFile) {
        medicalFileService.create(medicalFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping(value = "/findById/{id}")
    public ResponseEntity<MedicalFile> findById(@PathVariable("id") int id) {
        MedicalFile medicalFile = medicalFileService.findById(id);
        return new ResponseEntity<>(medicalFile, HttpStatus.OK);
    }

}
