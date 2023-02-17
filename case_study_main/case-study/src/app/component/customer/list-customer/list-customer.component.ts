import {Component, OnInit} from '@angular/core';
import {Customer} from "../../../model/customer/customer";
import {CustomerServiceService} from "../../../service-customer/customer-service.service";
import {CustomerTypeServiceService} from "../../../customer-type-service/customer-type-service.service";
import {CustomerType} from "../../../model/customer/customer-type";

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  customer: Customer = {};
  temp: Customer = {};


  constructor(private customerService: CustomerServiceService,
              private customerTypeServiceService: CustomerTypeServiceService) {
    this.getAll();
    this.getAllCustomerType();
  }

  ngOnInit(): void {
  }

  getAllCustomerType() {
    this.customerTypeServiceService.getCusType().subscribe(next => {
      this.customerTypeList = next;
    }, error => {
    })
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      console.log(next);
      this.customerList = next;
    }, error => {

    }, () => {
    })
  }

  findName(name: string) {
    this.customerService.findByName(name).subscribe(next => {
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


  getName(name: string, selectName: string) {
    if (name === "" && selectName === "") {
      this.getAll();
    } else if (name !== "" && selectName === "") {
      this.findName(name);
    } else if (name !== "" && selectName !== "") {
      this.customerService.findNameSelectName(name, selectName).subscribe(next => {
        this.customerList = next;
      })
    } else  {
      this.customerService.findSelectName(selectName).subscribe(next => {
        this.customerList = next;
      }, error => {
      })
    }
  }
}
