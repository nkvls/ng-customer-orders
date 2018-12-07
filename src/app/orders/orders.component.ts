import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CustomerService } from '../shared/customer-service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(private customerService: CustomerService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');this.customerService.getOrders(id)
    .subscribe((orders: IOrder[]) => {
      this.orders = orders;
    });

    this.customerService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });

  }

}
