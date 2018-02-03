import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// import {Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import {PriceListPage} from "../pages/price_list/price_list";
// import {PriceListStep1Page} from "../pages/price_list/price_list_step1";

import { ListPage } from '../pages/list/list';
import {PriceListPage} from "../pages/price_list/price_list";
import {PriceListStep1Page} from "../pages/price_list/price_list_step1";
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ApiService } from '../services/goods_price_service';
import { HttpService } from '../utils/request';


import { Http,HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PriceListPage,
    PriceListStep1Page,
    ListPage,
    PriceListPage,
    PriceListStep1Page,
    AddGoodsPage,
    AddGoodsInputPage,
    AddGoodsRemmendPage,
    AddGoodsCasePage,
    BuyerMesgPage,
    ChooseBuyerPage,
    AddGoodsPricePage,
    GoodsPriceDetailPage,
    SearchIndexPage,
    MineHomePage,
    MineCoursePage,
    SearchSystemPage,
    SearchCoursePage,
    CourseDetailPage,
  ],
  imports: [
    // Http,

    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PriceListPage,
    PriceListStep1Page,
    ListPage,
    PriceListPage,
    PriceListStep1Page,
    AddGoodsPage,
    AddGoodsInputPage,
    AddGoodsRemmendPage,
    AddGoodsCasePage,
    BuyerMesgPage,
    ChooseBuyerPage,
    AddGoodsPricePage,
    GoodsPriceDetailPage,
    SearchIndexPage,
    MineHomePage,
    MineCoursePage,
    SearchSystemPage,
    SearchCoursePage,
    CourseDetailPage,

  ],
  providers: [
    // Http,
    HttpService,
    ApiService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
