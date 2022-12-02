import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-orders-update',
  templateUrl: './admin-orders-update.component.html',
  styleUrls: ['./admin-orders-update.component.css']
})
export class AdminOrdersUpdateComponent {

  id: string | any;
  order:any;
  submitted = false;
  Orders: any=[];

  constructor(
    private route: ActivatedRoute,private router: Router,
    private ordersService: OrdersService,private adminservice:AdminService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id=params.get('id');
    });
    
    this.ordersService.getOrderByid(this.id)
      .subscribe(data => {
        console.log(data)
        this.order = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.ordersService.changeOrderStatus(this.order)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reloadData();
    this.gotoList();
  }
 
  onSubmit() {
    this.updateProduct();    
  }
  reloadData() {
    this.Orders = this.ordersService.getAllOrders;
  }
  gotoList() {
    this.router.navigate(['/adminorders']).then(() => {
      window.location.reload();
    });
  }
}
