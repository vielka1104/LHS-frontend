import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginform!: FormGroup
  hide:boolean = true
  
  constructor(private formBuilder: FormBuilder,private route:Router) { }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
     })
  }
  GoToHomeDoctor(id:number){
    this.route.navigate([`doctor/${id}/home-doctor`])
  }
}
