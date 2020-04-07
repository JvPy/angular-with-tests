import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { ICrud } from './icrud';
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
  get()/*: Observable<ICrud[]>*/{
    return this.http.get<ICrud[]>('https://jsonplaceholder.typicode.com/users');
  }
  
  //Update
  update(){
    return this.http.get<ICrud>(this.configUrl);
  }
  
  //Delete
  delete(id:number){
    return this.http.get<void>(this.configUrl + id);
  }
}
