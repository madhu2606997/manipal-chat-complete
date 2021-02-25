import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  getIntent(text){
    let body = {
      'text':text
    }
 
    // return this.http.post("http://localhost:5000/webhook/",body).map(res=>{
    //   // console.log(res);
    //   return res
    // })
    return this.http.post("https://manipalchatbot.multipliersolutions.in/customwebhook/",body).map(res=>{
      // console.log(res);
      return res
    })
 }

}
