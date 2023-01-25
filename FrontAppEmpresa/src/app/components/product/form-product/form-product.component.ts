import { Component, OnInit } from '@angular/core';
import { APIProductServiceService } from 'src/app/services/apiproduct-service.service';
import {NgForm} from '@angular/forms';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  constructor(public service:APIProductServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
   if(this.service.formData.productId === 0) this.addProduct(form);
   else this.updateProduct(form);
  }

  addProduct(form:NgForm){
    this.service.postProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refresListProducts();
      },
      err => console.log(err)
    );
  }

  updateProduct(form:NgForm){
    this.service.putProduct().subscribe(
      res => {
        this.resetForm(form);
        this.service.refresListProducts();
      },
      err => console.log(err)
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new Product();
  }
}
