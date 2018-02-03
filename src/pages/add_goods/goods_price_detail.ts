import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'goods_price_detail.html'
})
export class GoodsPriceDetailPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  itemArray:Array<{title: string, mark: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

    this.itemArray=[
      {title:'A',mark:'主机'},
      {title:'B',mark:'选择'},
      {title:'C',mark:'选择'},
      {title:'D',mark:'选择'},
      {title:'E',mark:'选择'},
    ]
  }

  itemTapped(event, item) {
    console.log('success');
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
