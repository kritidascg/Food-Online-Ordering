import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/security/auth.service';
import { LoginService } from 'src/services/login.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = false;
  loginForm: any;
  responseData: any;

  constructor(private authservice:AuthService, private route: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
          'username':new FormControl(null,[Validators.required]),
          'password':new FormControl(null,[Validators.required, Validators.minLength(6)]),
      })
      
}

 get loginFormControls(){
 return this.loginForm.controls;
 }

  
    onLogin()
    {
      if(this.loginForm.valid)
      {
        console.log(this.loginForm.value);
        this.authservice.onLogin(this.loginForm.value).subscribe(result=>{
          if(result!=null)
          {
        localStorage.setItem("loginForm",JSON.stringify(this.loginForm.value));
        alert("Logged In Successfully");
            this.route.navigate(['']);
          }
          else{
            alert("Sign Up to continue")
            this.route.navigate(['signup']);
          }
        }
          )
      }
    }
}

    
  

