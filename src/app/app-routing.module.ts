import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/security/auth.guard';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RestaurantComponent } from './restaurants/restaurants.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'restaurants', component:RestaurantComponent, canActivate:[AuthGuard]},
  {path: 'menu/:id', component:FoodMenuComponent, canActivate:[AuthGuard]},
  {path: 'about', component:AboutComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
