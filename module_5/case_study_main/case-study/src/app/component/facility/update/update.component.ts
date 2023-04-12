import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServiceFacilityService} from "../../../service-facility/service-facility.service";
import {Facility} from "../../../model/facility";
import {FormControl, FormGroup} from "@angular/forms";
import {RentType} from "../../../model/rent-type";
import {FacilityType} from "../../../model/facility-type";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  facility: any;
  facilityForm: FormGroup;
  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private facilityService: ServiceFacilityService) {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      area: new FormControl(),
      cost: new FormControl(),
      maxPeople: new FormControl(),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      img: new FormControl(),
      numberOfFloor: new FormControl(),
      facilityFree: new FormControl(),
      facilityType: new FormControl(),
      rentType: new FormControl()
    })

    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get("id");
      this.facility = this.facilityService.findById(parseInt(id)).subscribe(next => {
        console.log(next)
        this.facilityForm.patchValue(next);
      }, error => {

      }, () => {
      })
    })
  }

  ngOnInit(): void {

    this.facilityService.getRenType().subscribe(next => {
      this.rentTypeList = next;
    }, error => {

    });

    this.facilityService.getFacType().subscribe(next => {
      this.facilityTypeList = next;
    }, error => {
    });
  }

  update() {

  }
}
