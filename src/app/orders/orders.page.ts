
import {  OrderService } from './orders.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Order} from './order.model';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';






@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  public searchField = '';
  public orders: Order[] = [];





  constructor(private orderService: OrderService, public nav: NavController,
     public alertController: AlertController, private barcodeScanner: BarcodeScanner) {

      }
      public scan() {
        this.barcodeScanner.scan().then(barcodeData => {
         this.searchField = barcodeData.text;
         }).catch(err => {
             console.log('Error', err);
         });
      }

public filterItems() {
  if (this.searchField === '') {
    this.orders = this.orderService.getAllOrders();
    return;
    }
  this.orders = [];
this.orders.push(this.orderService.getOrder(this.searchField));
}
  ngOnInit() {
if (this.searchField === '') {
this.orders = this.orderService.getAllOrders();
}

  }





}
