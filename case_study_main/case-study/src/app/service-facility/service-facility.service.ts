import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Facility} from "../model/facility";
import {Observable} from "rxjs";
import {FacilityType} from "../model/facility-type";
import {RentType} from "../model/rent-type";

@Injectable({
  providedIn: 'root'
})
export class ServiceFacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Facility[]>("http://localhost:3000/facility")
  }

  findById(id: number): Observable<Facility> {
    return this.httpClient.get<Facility>("http://localhost:3000/facility/" + id);
  }

  getFacType(): Observable<FacilityType[]> {
    return this.httpClient.get<FacilityType[]>("http://localhost:3000/facilityTypes");
  }

  getRenType(): Observable<RentType[]> {
    return this.httpClient.get<RentType[]>("http://localhost:3000/rentTypes");
  }
}
