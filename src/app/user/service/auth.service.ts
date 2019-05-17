import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User;

  constructor() {
    this.user = new User('Ralison','Guyelle','ralisonguyelle@gmail.com','guy');
   }

  login(email,password) : Observable<User>{
        if(email == this.user.email && password == this.user.password){
          return of(this.user);
        }else{
          return null;
        }
  }
}