// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { User } from 'src/models/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private userSubject =
//   new BehaviorSubject<User>(this.getUserFromLocalStorage());

//   constructor() { }


// public get currentUser():User{
//   return this.userSubject.value;
// }

// private getUserFromLocalStorage():User{
//   const userJson = localStorage.getItem(username);
//   if(userJson) return JSON.parse(userJson) as User;
//   return new User;
// }
// }
