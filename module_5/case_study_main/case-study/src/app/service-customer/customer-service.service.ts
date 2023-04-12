import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer/customer";
import {CustomerType} from "../model/customer/customer-type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");
  }


  create(customer: any) {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/customer/" + id);
  }

  findById(id: number) {
    return this.httpClient.get("http://localhost:3000/customer/" + id);
  }

  update(customer: any) {
    return this.httpClient.patch("http://localhost:3000/customer/" + customer.id, customer);
  }

  findByName(name: any): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like=" + name);
  }

  findNameSelectName(name: string, selectName: string) {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like=" + name + "&customerType.name=" + selectName);
  }

  findSelectName(selectName: string) {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?customerType.name=" + selectName);
  }
}
