import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/goods_price_service';
import { HttpService } from '../../utils/request';

@Component({
  selector: 'page-list',
  templateUrl: 'price_list.html'
})
export class PriceListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private apiService: ApiService,private httpService: HttpService) {
    // If we navigated to this page, we will have an item available as a nav param
    console.log('ApiService',this.apiService)
    this.httpService.post(this.apiService.priceApi.quotationHistory+'1',{})
      .then(
        (data)=>{
          console.log('data',data)
          this.items=data.datas;
        }
      )
    // this.selectedItem = navParams.get('item');
    //
    // // Let's populate this page with some filler content for funzies
    // this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    // 'american-football', 'boat', 'bluetooth', 'build'];
    //
    // this.items = [];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
