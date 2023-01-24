import { Component, OnInit } from '@angular/core';
import { APIProductServiceService } from 'src/app/services/apiproduct-service.service';
import {NgForm} from '@angular/forms';

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
    
  }
}
