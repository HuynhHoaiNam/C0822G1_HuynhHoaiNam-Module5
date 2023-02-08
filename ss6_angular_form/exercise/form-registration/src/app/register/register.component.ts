import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userList: User[] = [
    {
      id: 1,
      email: "hh@gmail.com",
      userName: "user1",
      password: "123",
      country: "VietNam",
      age: 20,
      gender: true,
      phone: "0933265451"
    },
    {
      id: 2,
      email: "nn@gmail.com",
      userName: "user21",
      password: "333",
      country: "China",
      age: 19,
      gender: false,
      phone: "0367455201"
    }
  ];


  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      id: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$')]),
      user: new FormControl("", [Validators.required, Validators.minLength(5)]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.required, Validators.minLength(6)]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required, Validators.min(18)]),
      gender: new FormControl("", [Validators.required]),
      phone: new FormControl("", [Validators.required, Validators.pattern('/^\\+84\\d{9,10}$/')])
    })
  }

  ngOnInit(): void {
  }

  get groupForm(){
    return this.reactiveForm.controls;
  }

  passwordCheck() {
    if (this.groupForm.password.value==this.groupForm.confirmPassword.value){
      return null;
    }
    return {'errorPass':true}
  }
}
