import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:  any;
  constructor(private productService: ProductService,  private router: Router) { }
  ngOnInit(): void {

    this.products = this.productService.getProductsList();
  }

  route(){

    this.router.navigate(['/login']);
  }

}
