import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class APIProductServiceService {

  constructor(private http: HttpClient) { }

  listProducts: Product[] = [];
  readonly baseUrl = 'https://localhost:7001/api/Products'
  formData: Product = new Product();

  postProduct(){
    return this.http.post(this.baseUrl, this.formData);
  }

  putProduct(){
    return this.http.put(`${this.baseUrl}/${this.formData.productId}`, this.formData);
  }

  updateState(product: Product){
    product.productIsFaulty = !product.productIsFaulty;
    console.log(product);
    
    return this.http.put(`${this.baseUrl}/${product.productId}`, product )
  }

  deleteProduct(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refresListProducts(){
    return this.http.get(this.baseUrl).toPromise()
    .then(res => this.listProducts = res as Product[]);
  }
}
