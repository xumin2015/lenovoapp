import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list-sass',
  templateUrl: 'buyer_mesg.html'
})
export class BuyerMesgPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  itemArray:Array<{title: string, mark: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

    this.itemArray=[
      {title:'产品分类',mark:'主机'},
      {title:'所属产品组',mark:'选择'},
      {title:'产品型号',mark:'选择'},
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
