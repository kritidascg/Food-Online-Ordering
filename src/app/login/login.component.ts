import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loginForm: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
          'username':new FormControl(null,[Validators.required, Validators.email]),
          'password':new FormControl(null,[Validators.required, Validators.minLength(6)]),
      })
}


  get loginFormControls(){

    return this.loginForm.controls;

  }


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }

}