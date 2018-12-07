import { Injectable } from '@angular/Core'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ICustomer, IOrder } from './interfaces';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class CustomerService {
    constructor(private http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>('../assets/customer-list.json');
    }

    getOrders(custId: number): Observable<IOrder[]> {
        return this.http.get<IOrder[]>('../assets/order-list.json')
        .pipe(
            catchError(this.handleError),
            map(orders => {
                let custOrders = orders.filter((order: IOrder) => order.customerId === custId);
                return custOrders;
            })          
        );
    }

    
    getCustomer(custId: number): Observable<ICustomer> {
        return this.getCustomers() 
        .pipe(
            catchError(this.handleError),
            map(customers => {
                let cust = customers.filter((x: ICustomer) => x.id === custId);
                return (cust && cust.length)? cust[0] : null;
            })
        )        
    }

    private handleError(error: any) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            const errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
      }
}