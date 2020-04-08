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
  update(itens){
    return this.http.get(this.configUrl, itens);
  }
  
  //Delete
  delete(id){
    return this.http.get(this.configUrl, id);
  }
}
