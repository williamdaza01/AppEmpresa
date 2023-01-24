import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormProductComponent } from './components/product/form-product/form-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
