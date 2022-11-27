import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  adminname='';
  password='';
  invalidLogin=false
  errorMessage='';
  successMessage='';
  loginSuccess=false;
  constructor( private adminservice: AdminService,
    private router: Router,private toastr: ToastrService
  ) { }
  ngOnInit(): void {
  }
  checkLogin(adminname : string | any)
   {
    let admin=  {
        "password":this.password,
        "contact":{
        "email":this.adminname,
        
        }
      }
        
      this.adminservice.login(admin).subscribe((res:any) => {
          if('errorMessage' in res){
            this.invalidLogin = true;
            this.errorMessage=res.errorMessage;
          //  this.toastr.error('', res.errorCode);
           // this.router.navigate(['/login']);
          }
          else if('message' in res){
            this.invalidLogin = false;
            this.loginSuccess = true;
            this.toastr.success('', res.message);
            sessionStorage.setItem('aname', this.adminname)
            this.router.navigate(['adminpanel']);

          }
     
     
    });
    this.loginSuccess = false;
    }
}
