import { Component } from '@angular/core';
import { UserService } from '../app/components/services/user.service';
import { AdminService } from '../app/components/services/admin.service';
import { Router } from '@angular/router';
import {CategoryService} from '../app/components/services/category.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refurbishedmart';
  name =''
  imagePath='/assets/images/shopping.png';

  getcategorys: any=[];

  constructor(
    public userloginService:UserService,public adminloginservice :AdminService, public router:Router,public categoryService:CategoryService) { }

    ngOnInit(): void {

      //  this.router.navigate(['/home']);
      this.categoryService.getAllCategorys().subscribe(data => {
        this.getcategorys = data;
      })
      }
  
    check() {
  
      if(this.userloginService.isUserLoggedIn()) {
  
        this.router.navigate(['userprofile',this.userloginService.email]);
      }
    }

    
    Admincheck() {
  
      if(this.adminloginservice.isAdminLoggedIn()) {
  
        this.router.navigate(['adminprofile',this.adminloginservice.email]);
      }
    }
    csearch(cat:any){
      this.router.navigate(['csearch',cat.categoryid]);
    }
  
}
