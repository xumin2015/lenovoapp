import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PriceListPage } from '../pages/price_list/price_list';
import { PriceListStep1Page } from '../pages/price_list/price_list_step1';
import { AddGoodsPage } from '../pages/add_goods/add_goods';
import { AddGoodsInputPage } from '../pages/add_goods/add_goods_input';
import { AddGoodsRemmendPage } from '../pages/add_goods/add_goods_recommend';
import { AddGoodsCasePage } from '../pages/add_goods/add_goods_case';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: '选择商品', component: ListPage },
      { title: '我的报价单', component: PriceListPage },
      { title: '选配产品', component: PriceListStep1Page },
      { title: '添加产品', component: AddGoodsPage },
      { title: '添加产品输入框', component: AddGoodsInputPage },
      { title: '添加推荐产品', component: AddGoodsRemmendPage },
      { title: '添加产品成功案例', component: AddGoodsCasePage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
