import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { ICrud } from '../icrud';

@Component({
  selector: 'app-crudtabel',
  templateUrl: './crudtabel.component.html',
  styleUrls: ['./crudtabel.component.css'],
  providers: [CrudService]
})
export class CrudtabelComponent implements OnInit {

  public items = []
  public item;

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.crud.get()
    .subscribe(data => this.items = data)
  }

  onClickDelete(id:number){
    console.log('click on delete ' + id);

    const confirmVar = confirm('delete item with id of ' + id);
    if(confirmVar) this.crud.delete(id);
  }

  onClickUpdate(item){
    this.item = item;
    console.log(item)
  }

  onClickNew(){
    this.item = JSON.stringify({id: 0, name:"", description:"", price:""})
  }

}