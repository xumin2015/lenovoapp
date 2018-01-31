import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
// import {PriceListPage} from "../pages/price_list/price_list";
// import {PriceListStep1Page} from "../pages/price_list/price_list_step1";
// import { AddGoodsPage } from '../pages/add_goods/add_goods';
// import { AddGoodsInputPage } from '../pages/add_goods/add_goods_input';
// import { AddGoodsRemmendPage } from '../pages/add_goods/add_goods_recommend';
// import { AddGoodsCasePage } from '../pages/add_goods/add_goods_case';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // ListPage,
    // PriceListPage,
    // PriceListStep1Page,
    // AddGoodsPage,
    // AddGoodsInputPage,
    // AddGoodsRemmendPage,
    // AddGoodsCasePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // ListPage,
    // PriceListPage,
    // PriceListStep1Page,
    // AddGoodsPage,
    // AddGoodsInputPage,
    // AddGoodsRemmendPage,
    // AddGoodsCasePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
