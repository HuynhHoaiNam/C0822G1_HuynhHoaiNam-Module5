import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../../model/customer/customer-type";
import {Customer} from "../../../model/customer/customer";
import {CustomerServiceService} from "../../../service-customer/customer-service.service";
import {Router} from "@angular/router";
import {CustomerTypeServiceService} from "../../../customer-type-service/customer-type-service.service";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customer: Customer = {};
  customerTypeList: CustomerType[] = [];


  customerForm: FormGroup;


  constructor(private customerService: CustomerServiceService,
              private route: Router,
              private customerTypeServiceService: CustomerTypeServiceService) {
    const regexName = "^[A-Z][a-z]*(?:[ ][A-Z][a-z]*)*$";
    const regexPhone = "^(090\\d{7})|(091\\d{7})|(\\(84\\)\\+90\\d{7})|(\\(84\\)\\+91\\d{7})$";
    const regexIdCard = "^(\\d{9}|\\d{12})$";
    const regexEmail = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern(regexName)]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl(),
      idCard: new FormControl("", [Validators.required,Validators.pattern(regexIdCard)]),
      phoneNumber: new FormControl("", [Validators.required,Validators.pattern(regexPhone)]),
      email: new FormControl("", [Validators.required, Validators.pattern(regexEmail)]),
      address: new FormControl("", [Validators.required]),
      customerType: new FormControl()
    })

    this.getAllCusType();
  }

  ngOnInit(): void {
  }

  createCustomer() {
    if (this.customerForm.valid) {
      this.customerService.create(this.customerForm.value).subscribe(next => {
        console.log(next);
        alert("Thêm mới thành công");
        this.route.navigateByUrl("/listCustomer");
      }, error => {

      }, () => {
      })
    }

  }

  getAllCusType() {
    this.customerTypeServiceService.getCusType().subscribe(next => {
      console.log(next);
      this.customerTypeList = next;
    }, error => {

    }, () => {
    })
  }
}
