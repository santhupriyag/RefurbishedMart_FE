import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SupportService } from '../services/support.service'; 
@Component({
  selector: 'app-admin-support',
  templateUrl: './admin-support.component.html',
  styleUrls: ['./admin-support.component.css']
})
export class AdminSupportComponent {
  public Support : any = [];


  constructor(private supportservice : SupportService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.supportservice.getAllSupports().subscribe(data => {
      this.Support = data
    }
  );   
  }


  reloadData(){
    this.supportservice.getAllSupports().subscribe(data => {
      this.Support = data
    }
  );   
  }
}
