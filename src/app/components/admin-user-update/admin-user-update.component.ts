import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-user-update',
  templateUrl: './admin-user-update.component.html',
  styleUrls: ['./admin-user-update.component.css']
})
export class AdminUserUpdateComponent {
  id: string | any;
  user:any;
  submitted = false;
  Users: any=[];

  constructor(
    private route: ActivatedRoute,private router: Router,
    private userService: UserService,private adminservice:AdminService
    ) { }

  ngOnInit(): void {

   
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.userService.editProfile(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reloadData();
    this.gotoList();
  }
 
  onSubmit() {
    this.updateProduct();    
  }
  reloadData() {
    this.Users = this.adminservice.getAllUsers();
  }
  gotoList() {
    this.router.navigate(['/adminpanel']).then(() => {
      window.location.reload();
    });
  }


}
