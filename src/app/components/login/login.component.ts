import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  invalidLogin='';
  loginSuccess='';
  errorMessage='';
  successMessage='';
  username='';
  password='';
  checkLogin(username:string){}
}
