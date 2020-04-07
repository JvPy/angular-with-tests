import { Component, OnInit } from '@angular/core';
// import { FormsModule }   from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

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

  constructor(private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  clickMessage = '';

  onClickMe() {
    this.isWrong = !this.login.checkLogin(this.username, this.password)

    if(this.isWrong == false){
      console.log('login works');
      //Go to next page
      this.router.navigate(['crud'])
      
    }
  }

}
