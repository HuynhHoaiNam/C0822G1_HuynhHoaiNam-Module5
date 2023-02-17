import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BenhVienService} from "../../service/benh-vien.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  benhAn: any;
  banhAnForm: FormGroup;

  // public compareWith(object1: Patient, object2: Patient) {
  //   return object1 && object2 ? object1.id === object2.id : object1 === object2;
  // }

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private benhVienService: BenhVienService) {
    this.banhAnForm = new FormGroup({
      id: new FormControl(),
      medicalRecordCode: new FormControl(),
      patientName: new FormControl("", [Validators.required, Validators.pattern("^[A-Z]*[a-z]*(?:[ ][A-Z]*[a-z]*)*$")]),
      hospitalizedDay: new FormControl("", [Validators.required]),
      hospitalDischargeDate: new FormControl("", [Validators.required]),
      reason: new FormControl("", [Validators.required]),
      treatments: new FormControl("", [Validators.required]),
      doctor: new FormControl("", [Validators.required]),
      patientCode: new FormControl("", [Validators.required]),
    })

    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get("id");
      this.benhAn = this.benhVienService.findById(parseInt(id)).subscribe(next => {
        console.log(next);
        this.banhAnForm.patchValue(next);
      })
    }, error => {

    }, () => {
    })
  }

  ngOnInit(): void {
    // this.benhVienService.danhSachBenhNhan().subscribe(next => {
    //   this.danhSachBenhNhan = next;
    // }, error => {
    // })

  }

  chinhSua() {
    this.benhVienService.chinhSua(this.banhAnForm.value).subscribe(next => {
      alert("Chỉnh sửa thành công");
      this.router.navigateByUrl("/list");
    }, error => {

      alert("Chỉnh sửa thất bại");
    })
  }
}
