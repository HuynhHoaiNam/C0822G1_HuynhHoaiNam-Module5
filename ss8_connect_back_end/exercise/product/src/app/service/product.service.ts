import {Injectable} from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {
  }


  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product")
  }

  getAllCategory() {
    return this.httpClient.get<Category[]>("http://localhost:3000/category")
  }


  create(value: any) {
    return this.httpClient.post("http://localhost:3000/product", value)
  }

  findProductById(id: number) {
    return this.httpClient.get("http://localhost:3000/product/" + id);
  }

  updateProduct(product: Product) {
    return this.httpClient.patch("http://localhost:3000/product/" + product.id, product);
  }

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/product/" + id);
  }
}
