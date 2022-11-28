import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  email: any;
  user:  any;
  constructor(private route: ActivatedRoute,private router: Router,
    private adminservice:AdminService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.adminservice.getAdmin(this.email)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  updateProfile(){
    this.adminservice.editProfile(this.user).subscribe((res:any) => {
       if('message' in res){
        this.toastr.success('', res.message);
       
      }
 
 
});
  }

}
