import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import{ProductService} from '../services/product.service'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-adminproductdetails',
  templateUrl: './adminproductdetails.component.html',
  styleUrls: ['./adminproductdetails.component.css']
})
export class AdminproductdetailsComponent {

id: number=0;
product:  any;

constructor(private route: ActivatedRoute,private router: Router,
  private productService: ProductService) { }

ngOnInit(): void {



  this.id = this.route.snapshot.params['id'];  /* Snapshot is used to get the Route Parameters */
  
  /**
   * As a publisher, you create an Observable instance that defines a subscriber function. 
   * This is the function that is executed when a consumer calls the subscribe() method. 
   * The subscriber function defines how to obtain or generate values or messages to be published.
   */
  this.productService.getProduct(this.id)
    .subscribe(data => {
      console.log(data)
      this.product = data;
    }, error => console.log(error));
}

list(){
  this.router.navigate(['listofproductsadmin']);
}

}
