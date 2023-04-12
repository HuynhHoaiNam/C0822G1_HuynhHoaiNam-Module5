import {Component, OnInit} from '@angular/core';
import {Facility} from "../../model/facility";
import {ServiceFacilityService} from "../../service-facility/service-facility.service";

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility[] = [];
  facility: Facility = {};

  constructor(private serviceFacilityService: ServiceFacilityService) {
    this.getAll();
  }

  getAll() {
    this.serviceFacilityService.getAll().subscribe(next => {
      console.log(next);
      this.facilityList = next;
    }, error => {

    }, () => {
    })
  }

  ngOnInit(): void {
  }

}
