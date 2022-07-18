import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutCartComponent implements OnInit {
  checkOutForm: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.checkOutForm= new FormGroup({
      'cardName': new FormControl('', Validators.required),
      'cardNumber': new FormControl('', Validators.required),
      'expMonth': new FormControl('', Validators.required),
      'expYear': new FormControl('', Validators.required),
      'cvv': new FormControl('', Validators.required),
      'pinCode': new FormControl('', Validators.required),
      'city': new FormControl('', Validators.required),
      'Address': new FormControl('', Validators.required),
      'Email': new FormControl('', Validators.required),
      'fullName': new FormControl('', Validators.required),
      'state': new FormControl('', Validators.required)}); 
  }
  orderPlaced(){
    alert("Your order is placed!");
  }
}