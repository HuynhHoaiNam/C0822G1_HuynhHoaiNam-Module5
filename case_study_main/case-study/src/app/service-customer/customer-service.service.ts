import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }
}
