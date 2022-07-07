import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthService } from '../security/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private service:AuthService,private route:Router){

    }
    canActivate(){
      if(this.service.IsLoggedIn()){
      return true;
      }
      else{
        this.route.navigate(['login']);
        return false;
      }
    }
}
