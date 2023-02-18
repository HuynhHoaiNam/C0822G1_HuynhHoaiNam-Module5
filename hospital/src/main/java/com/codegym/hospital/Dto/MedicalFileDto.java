package com.codegym.hospital.Dto;

import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

public class MedicalFileDto implements Validator {

    private int id;
    private String medicalRecordCode;
    @NotEmpty(message = "Không được để trống")
    @Pattern(regexp = "^[A-Z]*[a-z]*(?:[ ][A-Z]*[a-z]*)*$", message = "Tên không được chứa số và viết hoa chữ đầu")
    private String patientName;
    @NotEmpty(message = "Không được để trống")
    private String hospitalizedDay;
    @NotEmpty(message = "Không được để trống")
    private String hospitalDischargeDate;
    @NotEmpty(message = "Không được để trống")
    private String reason;
    @NotEmpty(message = "Không được để trống")
    private String treatments;
    @NotEmpty(message = "Không được để trống")
    private String doctor;
    @NotEmpty(message = "Không được để trống")
    private String patientCode;
    private boolean flag;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMedicalRecordCode() {
        return medicalRecordCode;
    }

    public void setMedicalRecordCode(String medicalRecordCode) {
        this.medicalRecordCode = medicalRecordCode;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getHospitalizedDay() {
        return hospitalizedDay;
    }

    public void setHospitalizedDay(String hospitalizedDay) {
        this.hospitalizedDay = hospitalizedDay;
    }

    public String getHospitalDischargeDate() {
        return hospitalDischargeDate;
    }

    public void setHospitalDischargeDate(String hospitalDischargeDate) {
        this.hospitalDischargeDate = hospitalDischargeDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getTreatments() {
        return treatments;
    }

    public void setTreatments(String treatments) {
        this.treatments = treatments;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public String getPatientCode() {
        return patientCode;
    }

    public void setPatientCode(String patientCode) {
        this.patientCode = patientCode;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {

    }
}
