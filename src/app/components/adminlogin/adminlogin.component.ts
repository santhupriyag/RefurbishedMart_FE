import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  invalidLogin='';
  loginSuccess='';
  errorMessage='';
  successMessage='';
  adminname='';
  password='';
  checkLogin(username:string){}

}
