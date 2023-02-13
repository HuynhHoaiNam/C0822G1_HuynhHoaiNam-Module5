import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerServiceService} from "../../../service-customer/customer-service.service";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customer: Customer = {};
  temp: Customer = {};


  constructor(private customerService: CustomerServiceService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customerList = next;
    }, error => {

    }, () => {
    })
  }


  delete(id: number) {
    if (id != null) {
      this.customerService.delete(id).subscribe(next => {
        this.getAll();
      }, error => {

      }, () => {
      })
    }

  }
}
