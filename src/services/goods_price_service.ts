import {HttpModule,Http, RequestOptions, Headers, URLSearchParams} from '@angular/http';
export class ApiService{
  priceApi={
    createQuotation: '/quotation/createQuotation',
    quotationHistory:'/quotation/history/'
  }
  // getGundams={
  //   GUNDAMS: 'GUNDAMS'
  // }

}
// constructor(public http: Http) {}
// public api='http://47.93.26.6:8081/';
// public headers=new Headers({'Content-Type':'application/x-www-form-urlencode'})
// public options=new RequestOptions({headers:this.headers});
// post(url,params){
//   var paramsResult=new URLSearchParams();
//   for(var key in params){
//     paramsResult.append(key,params.key)
//   }
//   return this.http.post(this.api+url,paramsResult,{headers:this.headers});
// }
