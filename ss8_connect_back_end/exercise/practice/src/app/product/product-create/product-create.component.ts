import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  categoryList: Category[] = [];
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  constructor(private productService: ProductService, private route: Router) {
    this.productService.getAllCategory().subscribe(next => {
      this.categoryList = next;
    }, error => {

    }, () => {
    })
  }


  ngOnInit(): void {
  }

  submit() {
    console.log(this.productForm.value);
    if (this.productForm.valid) {
      this.productService.create(this.productForm.value).subscribe(next => {
        alert("Thêm mới thành công");
        this.route.navigateByUrl("product/list");
      }, error => {

      }, () => {
      })
    }
  }
}
