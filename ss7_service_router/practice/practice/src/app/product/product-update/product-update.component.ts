import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: any;
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe(data => {
        const id = data.get("id");
        this.product = this.productService.findProductById(parseInt(id));
        if (this.product != null) {
          this.productForm.patchValue(this.product);
        }
      }, error => {
      },
      () => {
      })
  }

  ngOnInit(): void {
  }

  updateForm() {
    this.product = this.productForm.value;
    this.productService.update(this.product)
    this.route.navigate(["product/list"]);
  }
}
