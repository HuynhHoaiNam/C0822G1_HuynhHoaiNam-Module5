package com.codegym.hospital.controller;

import com.codegym.hospital.Dto.MedicalFileDto;
import com.codegym.hospital.model.MedicalFile;
import com.codegym.hospital.service.medical_file.impl.MedicalFileService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@CrossOrigin("*")

public class RestHospitalController {
    @Autowired
    private MedicalFileService medicalFileService;

    @GetMapping(value = "/list")
    public ResponseEntity<List<MedicalFile>> listMedicalFile(@RequestParam int index) {
        List<MedicalFile> medicalFileList = medicalFileService.getAll(index);
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


    @PutMapping(value = "/update/{id}")
    public ResponseEntity<?> updateMedicalFile(@Valid @RequestBody MedicalFileDto medicalFileDto, BindingResult bindingResult, @PathVariable("id") int id) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(bindingResult.getAllErrors(), HttpStatus.NO_CONTENT);
        }
        MedicalFile medicalFile = new MedicalFile();
        BeanUtils.copyProperties(medicalFileDto, medicalFile);
        medicalFileService.update(medicalFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<MedicalFile> createMedicalFile(@RequestBody MedicalFile medicalFile) {
        medicalFileService.create(medicalFile);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    @GetMapping("/findById/{id}")
    private ResponseEntity<MedicalFileDto> findByIdMedicalFile(@PathVariable("id") Integer id) {
        MedicalFile medicalFile = medicalFileService.findByIdMedicalFile(id);
        MedicalFileDto medicalFileDto = new MedicalFileDto();
        BeanUtils.copyProperties(medicalFile, medicalFileDto);
        return new ResponseEntity<>(medicalFileDto, HttpStatus.OK);
    }

}
