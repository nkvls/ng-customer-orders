import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { CustomerService } from '../shared/customer-service';
import { trigger, state, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class CustomerListComponent implements OnInit {
  
  constructor(private customerService: CustomerService) { }
  title: string = "Customers";
  private _customers: ICustomer[];
  isOpen: boolean = true;

  @Input() get customers():ICustomer[] {
    return this._customers;
  }

  set customers(value:ICustomer[]) {
    if(value) {      
      this.filteredCustList = this._customers = value;
      this.calculateOrderTotal();
    }
  }

  filteredCustList: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = '£';

  ngOnInit() { 
    this.customerService.getCustomers() 
      .subscribe((x: ICustomer[]) => this.customers = x);

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  calculateOrderTotal() {
    this.customersOrderTotal = 0;
    this.filteredCustList.forEach((x: ICustomer) => {
      this.customersOrderTotal += x.orderTotal;
    });
    
  }

  
  filterMe(data: string) {
    if(data && data.length > 0) {
      this.filteredCustList = this.customers.filter((cust:ICustomer) => {
        return (cust.firstName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
        cust.lastName.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
        cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1)
      });
    } else {
      this.filteredCustList = this.customers;
    }
    
    this.calculateOrderTotal();
  }
}

