import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../orders.service';
import { Order } from '../order.model';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }
loadedOrder: Order;
  ngOnInit() {
  this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('OrderId')) {
        return;
      }
      const recipeId = paramMap.get('OrderId');
      this.loadedOrder = this.orderService.getOrder(recipeId);
    });
  }

}
