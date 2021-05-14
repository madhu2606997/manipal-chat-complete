import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  headerDict = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };
  constructor(private http: HttpClient) { }

  getIntent(text, session) {
    let body = {
      'text': text,
      'session': session
    }

    // return this.http.post("http://localhost:5000/webhook/",body).map(res=>{
    //   // console.log(res);
    //   return res
    // })
    return this.http.post("https://manipalchatbot.multipliersolutions.in/customwebhook/", body).map(res => {
      
      let formData  = new HttpParams({
        fromObject: {
          "Session_Id": session,
          "User_message": text,
          "Bot_message": JSON.stringify(res)
        }
      });

    
      // console.log(formData)
      this.http.post("http://multipliersolutions.in/Chatbot_Dashboard/api.php", (formData), this.requestOptions).subscribe(res1 => {
        console.log(res1)
      })
      return res
    })
  }

}
