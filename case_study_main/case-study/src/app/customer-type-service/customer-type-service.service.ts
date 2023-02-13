import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomerType} from "../model/customer/customer-type";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeServiceService {

  constructor(private httpClient:HttpClient) { }

  getCusType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>("http://localhost:3000/customerType");
  }
}
