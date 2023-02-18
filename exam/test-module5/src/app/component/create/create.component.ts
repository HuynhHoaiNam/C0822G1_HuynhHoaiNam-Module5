import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BenhVienService} from "../../service/benh-vien.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  benhAn: any;
  banhAnForm: FormGroup;

  constructor(private router: Router,
              private benhVienService: BenhVienService) {
    this.banhAnForm = new FormGroup({
      doctor: new FormControl("", [Validators.required]),
      flag: new FormControl(),
      hospitalDischargeDate: new FormControl("", [Validators.required]),
      hospitalizedDay: new FormControl("", [Validators.required]),
      medicalRecordCode: new FormControl(),
      patientCode: new FormControl("", [Validators.required]),
      patientName: new FormControl("", [Validators.required, Validators.pattern("^[A-Z]*[a-z]*(?:[ ][A-Z]*[a-z]*)*$")]),
      reason: new FormControl("", [Validators.required]),
      treatments: new FormControl("", [Validators.required]),
      id: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  create() {
    if (this.banhAnForm.valid) {
      this.benhVienService.create(this.banhAnForm.value).subscribe(next => {
        alert("Thêm mới thành công");
        this.router.navigateByUrl("/list");
      }, error => {
        alert("Thêm mới thất bại");
        this.benhAn = this.banhAnForm.value
      })
    }
  }

}
