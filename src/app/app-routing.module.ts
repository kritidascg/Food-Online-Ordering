import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/security/auth.guard';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutCartComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { RestaurantComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  {path: '', component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'restaurants', component:RestaurantComponent, canActivate:[AuthGuard]},
  {path: 'menu/:id', component:FoodMenuComponent, canActivate:[AuthGuard]},
  {path: 'cart', component:CartComponent, canActivate:[AuthGuard]},
  {path: 'checkout', component:CheckoutCartComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'success', component:OrdersuccessComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
