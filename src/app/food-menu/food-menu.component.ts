import { Component, OnInit } from '@angular/core';
import { IMenuDetails } from 'src/models/menuDetails';
import { RestaurantService } from 'src/services/restaurant-service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  public MenuDetails: any;
  addButton:boolean=false;

  constructor(private service: RestaurantService) { }

  ngOnInit() {
    this.service.getMenuDetails()
   .subscribe(data => this.MenuDetails= data.Result);
  }

  add()
  {

  }


  }

