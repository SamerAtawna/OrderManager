import { Injectable } from '@angular/core';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private recipesArray: Order[];
 private Orders: Order[] = [
    {
      OrderId: '1',
      CustomerId: '98765',
       Name: 'Avi',
       Address: 'Ashqelon, 665544',
       Product: 'Pizza',
       Description: 'Special pizza'
    },
    {
       OrderId: '2',
       CustomerId: '12345',
       Name: 'Yossi',
       Address: 'Beer Sheva, 223345',
       Product: 'Shawarma',
       Description: 'Shawarma with chips and drink'
    },
    {
      OrderId: '3',
      CustomerId: '6543',
       Name: 'Omri',
       Address: 'Ashqelon, 665544',
        Product: 'Falafel',
       Description: 'Falafel and drink'
    }
  ]
  constructor() {}
  getAllOrders() {
    return [...this.Orders];
  }

  getOrder(orderId: string) {

  return {...this.Orders.find(recipe => {
      return recipe.OrderId.indexOf(orderId) > -1 || recipe.Description.toLowerCase().indexOf(orderId.toLowerCase()) > -1;
    })
  };
  }
}
