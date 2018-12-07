export interface ICustomer {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    city: string,
    orderTotal: number
};

export interface IOrder {
    customerId: number,
    orderItems: IOrderItem[]
}

export interface IOrderItem {
    id: number,
    productName: string,
    itemCost: number
}