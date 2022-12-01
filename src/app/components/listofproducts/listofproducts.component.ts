import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';

import{ProductService} from '../services/product.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css']
})
export class ListofproductsComponent {
  // constructor(private router:Router){}
  updateproduct(id:any){
    this.router.navigate(['adminupdate',id]);
  }

  detailspage(id:any){
    this.router.navigate(['adminproductdetails',id]);
  }
  products: any=[];

  constructor( private productService: ProductService,
    private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getProductsList();
  }

  productDetails(id: number){
    this.router.navigate(['view', id]);
  }

  editProduct(id: number) {
    this.router.navigate(['updateproduct',id])  // navigate to component from a method
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
