import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  temp: Product = {};

  constructor(private productService: ProductService
    , private route: Router) {
    this.getAll();
  }

  getAll(){
    this.productService.getAll().subscribe(next => {
      // console.log(next);
      this.productList = next;
    }, error => {

    }, () => {
    })
  }

  ngOnInit() {
  }


  delete(id: number) {
    // console.log(id);
    this.productService.delete(id).subscribe(next => {
      this.getAll();
    }, error => {

    });

  }
}
