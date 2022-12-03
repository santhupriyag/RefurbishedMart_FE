import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import{ProductService} from '../services/product.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminupdateComponent {
  id: string | any;
  product:any;
  submitted = false;
  products: any=[];

  constructor(
    private route: ActivatedRoute,private router: Router,
    private productService: ProductService
    ) { }

  ngOnInit(): void {

   
    this.id = this.route.snapshot.params['id'];
    
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.product = data;
      }, error => console.log(error));
  }

  updateProduct() {
    this.productService.updateProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.reloadData();
    this.gotoList();
  }
 
  onSubmit() {
    this.updateProduct();    
  }
  reloadData() {
    this.products = this.productService.getProductsList();
  }
  gotoList() {
    this.router.navigate(['/listofproductsadmin']).then(() => {
      window.location.reload();
    });
  }
  list(){
    this.router.navigate(['listofproductsadmin']);
  }
}
