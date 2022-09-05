import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform!: FormGroup
  hide:boolean = true
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
     })
  }

}
