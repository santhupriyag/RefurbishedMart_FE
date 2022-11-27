import { Component } from '@angular/core';
import { UserService } from '../app/components/services/user.service';
import { AdminService } from '../app/components/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'refurbishedmart';
  name =''
  imagePath='/assets/images/shopping.png';

  constructor(
    public userloginService:UserService,public adminloginservice :AdminService, public router:Router) { }

    ngOnInit(): void {

      //  this.router.navigate(['/home']);
      }
  
    check() {
  
      if(this.userloginService.isUserLoggedIn()) {
  
        this.router.navigate(['userprofile',this.userloginService.email]);
      }
    }
  
}
