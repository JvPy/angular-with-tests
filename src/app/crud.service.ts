import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

interface ICrud {
  id: number,
  name: string,
  description: string,
  price: number,
  email: string,
  phone: string
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  configUrl = 'assets/crud.json';

  //Create
  create(){
    return this.http.get<void>(this.configUrl);
  }
  
  //Read
  get(){
    console.log('get')
    console.log(this.configUrl);
    return fetch('https://jsonplaceholder.typicode.com/users').then(x => x.json());
  }
  
  //Update
  update(){
    return this.http.get<ICrud>(this.configUrl);
  }
  
  //Delete
  delete(){
    return this.http.get<void>(this.configUrl);
  }
}
