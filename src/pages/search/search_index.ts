import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/goods_price_service';
import { HttpService } from '../../utils/request';
// import {HttpModule,Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';

@Component({
  selector: 'page-list',
  templateUrl: 'search_index.html',
  providers: [ApiService]
})
export class SearchIndexPage {
  selectedItem: any;
  // check_input_value:function;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  item_list:Array<{title: string}>;
  check_input_value:object;
  constructor(public navCtrl: NavController, public navParams: NavParams,private apiService: ApiService,private httpService: HttpService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.item_list=[];
    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.check_input_value=function(value){
      this.item_list.push({title:value});
      console.log(this.apiService.getGundams['GUNDAMS']);
      // this.httpService.getBooks('quotation/createQuotation');
      this.httpService.post('quotation/sendEmail',{id:1,userId:2});
      // this.httpService.post('quotation/sendEmail',{id:1,userId:2});
    }
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
