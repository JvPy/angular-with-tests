import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userValidated : boolean = false;

  checkLogin(username: string, password: string){
    // console.log(username, password, btoa(password))

    let x = this.http.get<boolean>('https://jsonplaceholder.typicode.com/users');
    
    this.userValidated =  x ? true : false 

    return this.userValidated
  }
}
