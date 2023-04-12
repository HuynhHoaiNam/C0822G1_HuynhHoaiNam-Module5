import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerServiceService} from "../../../service-customer/customer-service.service";
import {Customer} from "../../../model/customer/customer";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerTypeServiceService} from "../../../customer-type-service/customer-type-service.service";
import {CustomerType} from "../../../model/customer/customer-type";
import {Category} from "../../../../../../../ss8_connect_back_end/exercise/product/src/app/model/category";

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customerList: Customer[] = [];
  customerTypeList: CustomerType[] = [];
  customer: any;
  customerForm: FormGroup;

  public compareWith(object1: Category, object2: Category) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerServiceService,
              private customerTypeServiceService: CustomerTypeServiceService,
              private route:Router) {
    const regexName = "^[A-Z][a-z]*(?:[ ][A-Z][a-z]*)*$";
    const regexPhone = "^(090\\d{7})|(091\\d{7})|(\\(84\\)\\+90\\d{7})|(\\(84\\)\\+91\\d{7})$";
    const regexIdCard = "^(\\d{9}|\\d{12})$";
    const regexEmail = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";
    this.customerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl("", [Validators.required, Validators.pattern(regexName)]),
      dateOfBirth: new FormControl("", [Validators.required]),
      gender: new FormControl(),
      idCard: new FormControl("", [Validators.required, Validators.pattern(regexIdCard)]),
      phoneNumber: new FormControl("", [Validators.required, Validators.pattern(regexPhone)]),
      email: new FormControl("", [Validators.required, Validators.pattern(regexEmail)]),
      address: new FormControl("", [Validators.required]),
      customerType: new FormControl()
    })


    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get("id");
      this.customer = this.customerService.findById(parseInt(id)).subscribe(next => {
        console.log(next);
        this.customerForm.patchValue(next);
      })
    }, error => {

    }, () => {
    })
  }

  ngOnInit(): void {
    this.customerTypeServiceService.getCusType().subscribe(next => {
      console.log(next);
      this.customerTypeList = next;
    });
  }


  update() {
    this.customer = this.customerForm.value;
    this.customerService.update(this.customer).subscribe(next => {
      alert("Cập nhật thành công");
      this.route.navigateByUrl("/listCustomer");
    })
  }

}

