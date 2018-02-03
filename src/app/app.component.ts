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
import { BuyerMesgPage } from '../pages/add_goods/buyer_mesg';
import { ChooseBuyerPage } from '../pages/add_goods/choose_buyer';
import { AddGoodsPricePage } from '../pages/add_goods/add_goods_price';
import { GoodsPriceDetailPage } from '../pages/add_goods/goods_price_detail';
import { SearchIndexPage } from '../pages/search/search_index';
import { MineHomePage } from '../pages/mine_home/mine_home';
import { MineCoursePage } from '../pages/mine_home/mine_course';
import { SearchSystemPage } from '../pages/search/search_system';
import { SearchCoursePage } from '../pages/search/search_course';
import { CourseDetailPage } from '../pages/search/course_detail';
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
      { title: '买方信息', component: BuyerMesgPage },
      { title: '选择客户', component: ChooseBuyerPage },
      { title: '生成报价单', component: AddGoodsPricePage },
      { title: '报价单详情', component: GoodsPriceDetailPage },
      { title: '主页搜索', component: SearchIndexPage },
      { title: '我的主页', component: MineHomePage },
      { title: '我的课程', component: MineCoursePage },
      { title: '系统搜索', component: SearchSystemPage },
      { title: '课程搜索', component: SearchCoursePage },
      { title: '课程详情', component: CourseDetailPage },
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
