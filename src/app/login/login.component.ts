import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : string = "";
  password : string = "";
  message: string = "User and/or password incorrect"
  isWrong: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickMessage = '';

  onClickMe() {
    console.log('Click on login.');
  }

}
