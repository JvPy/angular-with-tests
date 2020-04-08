import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnChanges {

  constructor(private crud: CrudService) { }

  public message = "Please fill all the fields";
  public isWrong = false;
  public display = false

  @Input() item;

  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes);
    if(changes.item.currentValue != changes.item.previousValue){
      this.display = true;
    }
  }

  registerUser(form: NgForm) {
    const updateJsonString = JSON.stringify(form.value)
    const updateJson = JSON.parse(updateJsonString); 

    if(!updateJson.name) {
      this.isWrong = true;
    } else {
      this.isWrong = false
      this.crud.update(updateJsonString)
    }
  }

}
