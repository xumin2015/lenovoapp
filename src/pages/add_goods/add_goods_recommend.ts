import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiService } from '../../services/goods_price_service';
import { HttpService } from '../../utils/request';

@Component({
  selector: 'page-list-sass',
  templateUrl: 'add_goods_recommend.html'
})
export class AddGoodsRemmendPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  itemArray:Array<{title: string, mark: string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private apiService: ApiService,private httpService: HttpService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.httpService.get('/api/userCourse/saveOrUpdate',{id:1,userId:1,courseId:1,status:0})
      .then(((res)=>{console.log('res',res);this.itemArray=res.datas}))
      .catch((err)=>{console.log('err',err)});
    // Let's populate this page with some filler content for funzies
    this.httpService.post('/quotation/recommendProducts',{})
      .then(((res)=>{console.log('res',res);this.itemArray=res.datas}))
      .catch((err)=>{console.log('err',err)});
    // this.itemArray=[
    //   {title:'小米',mark:'主机'},
    //   {title:'Mac',mark:'选择'},
    //   {title:'联想',mark:'选择'},
    // ]
  }

  itemTapped(event, item) {
    console.log('success');
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(ListPage, {
    //   item: item
    // });
  }
}
