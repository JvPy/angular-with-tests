import { Component, OnInit } from '@angular/core';
import { CrudService, ICrud } from '../crud.service';

@Component({
  selector: 'app-crudtabel',
  templateUrl: './crudtabel.component.html',
  styleUrls: ['./crudtabel.component.css'],
  providers: [CrudService]
})
export class CrudtabelComponent implements OnInit {

  private items2:ICrud = [];

  items = [
    {
      "id":"1",
      "name":"Item 1",
      "description":"an item of type 1",
      "price":"10.00"
    },
    {
      "id":"2",
      "name":"Item 2",
      "description":"an item of type 2",
      "price":"15.00"
    },
    {
      "id":"3",
      "name":"Item 3",
      "description":"an item of type 3",
      "price":"20.00"
    },
  ]

  
  constructor(private crud: CrudService) { }

  ngOnInit(): void {
    this.items2 = this.crud.get();
    console.log(this.items2)
    // this.getItem().subscribe(data => {
    //   this.items = data;
    // })
  }

  onClickDelete(id:number){
    console.log('click on delete ' + id);
  }

  onClickUpdate(item){
    console.log(item)
  }

}