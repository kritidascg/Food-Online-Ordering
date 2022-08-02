import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/services/restaurant-service';
import { CustomValidators } from '../custom-validators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registrationForm:any;

  constructor(private service:RestaurantService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      'username':new FormControl(null,[Validators.required]),
      'password':new FormControl(null,[Validators.required, CustomValidators.strongPassword]),
      'phone': new FormControl(null,[Validators.required, Validators.maxLength(10)]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
  })
  }

onRegister(data: any)
{
  this.router.navigate(['login']);
  alert("You are signed in");
  
}

}