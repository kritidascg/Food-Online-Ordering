import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from 'src/services/cart.service';
import {RestaurantService} from 'src/services/restaurant-service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  public MenuDetails: any;
  addButton: boolean = false;
  menuId: any;
  static MenuDetails: any;
  constructor(public service: RestaurantService, private router: Router,
    private cartService: CartService, private actRoute: ActivatedRoute)
    { }

  ngOnInit() {
    this.menuId = this.actRoute.snapshot.paramMap.get('id');
     this.service.getRestaurantDetails()
      .subscribe(data => {
        this.MenuDetails = data[(this.menuId)].foodMenu;
      });
  }

  add(item: any) {
    this.cartService.addtoCart(item);
    this.router.navigate(['cart']);
  }
}
