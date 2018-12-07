import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SharedModule } from '../app/shared/shared.module';
import { FilteredCustomer } from './customer-list/filtered-customer';
import { CustomerService } from './shared/customer-service';
import { OrdersComponent } from './orders/orders.component';


import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [ AppComponent, CustomerOrderComponent, CustomerListComponent, FilteredCustomer, OrdersComponent ],
  imports: [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, SharedModule, FormsModule, HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatSidenavModule],
  providers: [ CustomerService ],
  bootstrap: [AppComponent] 
})

export class AppModule 
{ 
  
}
