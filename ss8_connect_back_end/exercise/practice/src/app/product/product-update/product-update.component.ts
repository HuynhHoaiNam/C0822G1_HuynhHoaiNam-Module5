import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  categoryList: Category[] = [];
  product: any;

  public compareWith(object1: Category, object2: Category) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  })

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {

    this.activatedRoute.paramMap.subscribe(next => {
        const id = next.get("id");
        this.product = this.productService.findProductById(parseInt(id)).subscribe(data => {
          this.productForm.patchValue(data);
        });

      }, error => {
      },
      () => {
      })

  }

  ngOnInit(): void {
    this.productService.getAllCategory().subscribe(next => {
      this.categoryList = next;
    });
  }

  updateForm() {
    this.product = this.productForm.value;
    this.productService.updateProduct(this.product).subscribe(next => {
      alert("Chỉnh sửa thành công")
      this.route.navigate(["product/list"]);
    })


  }


}
