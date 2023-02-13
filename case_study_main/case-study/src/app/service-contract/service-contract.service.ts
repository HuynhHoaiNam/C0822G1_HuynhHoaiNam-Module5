import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../model/contract/contract";

@Injectable({
  providedIn: 'root'
})
export class ServiceContractService {

  constructor(private httpClient:HttpClient) { }

  getAll() {
    return this.httpClient.get<Contract[]>("http://localhost:3000/contract")
  }
}
