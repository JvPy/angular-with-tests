import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = "";
  password : string = "";
  message: string = "User and/or password incorrect"
  isWrong: boolean = false;

  constructor(private login:LoginService) { }

  ngOnInit(): void {
  }

  clickMessage = '';

  onClickMe() {
    console.log('Click on login.');
    this.isWrong = !this.login.checkLogin(this.username, this.password)

    if(this.isWrong == false){
      //Go to next page
    }
  }

}
