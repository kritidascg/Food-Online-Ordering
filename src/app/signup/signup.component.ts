import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/services/restaurant-service';
import { CustomValidators } from '../custom-validators';
import { HttpClient } from '@angular/common/http';

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
  console.log(this.registrationForm.value);
  this.service.registerUser(this.registrationForm.value)
  .subscribe(result=>
  {
    if(result!=null)
    {
      this.router.navigate(['login']);
    }
  })
  

}

}
