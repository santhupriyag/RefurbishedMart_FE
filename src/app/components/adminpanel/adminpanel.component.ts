import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AdminService } from '../services/admin.service';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit  {

  public Users : any = [];


  constructor(private adminService : AdminService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {

    this.adminService.getAllUsers().subscribe(data => {
      this.Users = data
    }
  );   
  }
  deleteUser(uid:any){
    this.adminService.deleteUserByid(uid)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));

  }

  reloadData(){
    this.adminService.getAllUsers().subscribe(data => {
      this.Users = data
    }
  );   
  }
  updateUser(uid:any)
  {
    this.router.navigate(['adminuserupdate',uid])
    
  }
}

