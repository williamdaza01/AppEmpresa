import { Component, OnInit } from '@angular/core';
import { APIProductServiceService } from 'src/app/services/apiproduct-service.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service:APIProductServiceService) { }

  ngOnInit(): void {
    this.service.refresListProducts();
  }

  populateForm(product: Product){
    this.service.formData = Object.assign({}, product);
  }

  
  onDelete(id: number){
    if(confirm("Are you sure to delete this product?")){
      this.service.deleteProduct(id).subscribe(
        res => {
          this.service.refresListProducts();
        },
        err => console.log(err)
      );
    }
  }

  onChange(product: Product){
    this.service.updateState(product).subscribe(
      res => {
          this.resetProduct(product)
          this.service.refresListProducts();
        },
        err => console.log(err)
    )
  }

  resetProduct(product: Product){
    this.service.formData = new Product();
  }
}
