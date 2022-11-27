import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.css']
})
export class AdminlogoutComponent {
  constructor(
    private adminService: AdminService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.adminService.logOut();
    this.router.navigate(['home']);

  }
}
