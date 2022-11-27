import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private userservice: UserService,
    private router: Router,private toastr: ToastrService
  ) { }
  ngOnInit(): void {
  }

  username=''
  password=''
  invalidLogin=false
  errorMessage='';
  successMessage='';
  loginSuccess=false;
  
  checkLogin(username : string | any)
   {
    let user=  {
        "password":this.password,
        "contact":{
        "email":this.username,
        
        }
      }
        
      this.userservice.login(user).subscribe((res:any) => {
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
            sessionStorage.setItem('username', this.username)
            this.router.navigate(['userprofile',username]);

          }
     
     
    });
    this.loginSuccess = false;
    }

}
