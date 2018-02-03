// import {Http} from '@angular/http';
// // import 'rxjs/add/operator/toPromise';
// // import { Injectable } from '@angular/core';
// // @Injectable()
// // let http=new Http()
// // import { Injectable } from '@angular/core';
// // @Injectable()
// export class HttpService{
//   constructor(public http: Http) {}
//   // public api='http://47.93.26.6:8081/';
//   // public headers=new Headers({'Content-Type':'application/x-www-form-urlencode'})
//   // public options=new RequestOptions({headers:this.headers});
//   // post(url,params): object{
//   //   var paramsResult=new URLSearchParams();
//   //   for(var key in params){
//   //     paramsResult.append(key,params.key)
//   //   }
//   //   return this.http.post(this.api+url,paramsResult,{headers:this.headers});
//   // }
//   post(){
//     // http.get('www.baidu.com');
//    console.log('success');
//     return 'success';
//   }
// }
import { Injectable } from '@angular/core';

import {Http, HttpModule,Headers,RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';



@Injectable()

export class HttpService {

  constructor(private http: Http) { }

  public api='http://47.93.26.6:8081/';
  public headers=new Headers({'Content-Type':'application/x-www-form-urlencode'})
  public options=new RequestOptions({headers:this.headers});
  post(url,params){
    console.log(this.http)
    var paramsResult=new URLSearchParams();
    for(var key in params){
      paramsResult.append(key,params[key])
    }
    return this.http.post(this.api+url+'?'+paramsResult.toString(),{},{headers:this.headers})

      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }

  get(url,params){
    var paramsResult=new URLSearchParams();
    for(var key in params){
      paramsResult.append(key,params[key])
    }
    return this.http.get(this.api+url+'?'+paramsResult.toString())

      .toPromise()
      .then(response => response.json())
      .catch(this.handleError)
  }



  private handleError(error: any): Promise<any> {

    console.error('An error occurred', error); // for demo purposes only

    return Promise.reject(error.message || error);

  }

}
