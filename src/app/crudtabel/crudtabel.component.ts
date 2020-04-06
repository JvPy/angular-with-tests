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

  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.crud.get()
    .subscribe(data => this.items = data)
  }

  onClickDelete(id:number){
    console.log('click on delete ' + id);
    this.crud.delete(id);
  }

  onClickUpdate(item){
    console.log(item)
  }

}