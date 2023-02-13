import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: any;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
        const id = data.get("id");
        this.product = this.productService.findProductById(parseInt(id));
        if (this.product != null) {
          this.productForm.patchValue(this.product);
        }
      }, error => {
      },
      () => {
      });
  }

  // deleteForm() {
  //   this.product = this.productForm.value;
  //   this.productService.delete(this.product)
  //   this.route.navigate(["product/list"]);
  // }
}

