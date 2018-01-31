import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'add_goods_recommend.html'
})
export class AddGoodsRemmendPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  itemArray:[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param

    // Let's populate this page with some filler content for funzies

    this.itemArray=[
      {title:'小米',mark:'主机'},
      {title:'Mac',mark:'选择'},
      {title:'联想',mark:'选择'},
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
