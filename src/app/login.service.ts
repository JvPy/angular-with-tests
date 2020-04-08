import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userValidated : boolean = false;

  checkLogin(username: string, password: string){
    // console.log(username, password, btoa(password))

    let x = this.http.post<boolean>('https://jsonplaceholder.typicode.com/users', "");
    
    this.userValidated =  x ? true : false 

    return this.userValidated
  }
}
