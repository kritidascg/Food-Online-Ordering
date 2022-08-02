import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/security/auth.service';
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
          'password':new FormControl(null,[Validators.required, Validators.minLength(5)]),
      })
      
}

 get loginFormControls(){
 return this.loginForm.controls;
 }

  
    onLogin()
    {
      this.authservice.onLogin(this.loginForm.value).subscribe(res=> {
        if(res!=null)
        {
          localStorage.setItem("loginForm", JSON.stringify(this.loginForm.value));
          this.route.navigate(['']);
        }
      }, error =>{
        alert("Invalid username and password.Sign up to continue");
        this.route.navigate(['signup']);
      }
        );
    }
}

    
  

