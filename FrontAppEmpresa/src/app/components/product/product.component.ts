import { Component, OnInit } from '@angular/core';
import { APIProductServiceService } from 'src/app/services/apiproduct-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public service:APIProductServiceService) { }

  ngOnInit(): void {
  }

}
