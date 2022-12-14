import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  email: any;
  user:  any;
  constructor(private route: ActivatedRoute,private router: Router,
    private userservice:UserService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    this.userservice.getUser(this.email)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
  }
  updateProfile(){
    this.userservice.editProfile(this.user).subscribe((res:any) => {
       if('message' in res){
        this.toastr.success('', res.message);
       
      }
 
 
});
  }

}
