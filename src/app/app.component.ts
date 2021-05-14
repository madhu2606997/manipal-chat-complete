import { Component, OnInit,ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from './service/chat.service';
import {NgxAutoScroll} from "ngx-auto-scroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent implements OnInit  {
  title = 'chatbot';
  session = this.getUniqueId(4)
  showC = false
  MainC = true
  MainP = false
  Mainmsg = []
  Usermsg = []
  Allmsg = []
  input = new FormControl('')
  @ViewChild(NgxAutoScroll) ngxAutoScroll: NgxAutoScroll;
  
  public forceScrollDown(): void {

    this.ngxAutoScroll.forceScrollDown();
}
 
msgInput = new FormGroup({
  inputMsg: new FormControl('', Validators.required),
  

});
  constructor(private chat:ChatService){

  }
ngOnInit(){ 
  
  this.chat.getIntent('hi',this.session).subscribe(res=>{
      console.log(res)
      this.Mainmsg.push(res);
      res['type'] = 'bot'
    this.Allmsg.push(res);
    this.scrollToBottom()
    console.log(this.Allmsg);
   
  }) 
  setTimeout(() => {
    this.MainP= true
  }, 2000);

}



getMsg(val) {
  // console.log(val)
  // console.log('from parent');
    this.Usermsg.push(val)
    let t = {
        msg :val,
        'type':'user'
    }
   
  this.Allmsg.push(t);
  this.scrollToBottom();
  
 
  this.chat.getIntent(val,this.session).subscribe(res=>{
    console.log(res);
    this.Mainmsg.push(res);
    res['type'] = 'bot'
    this.Allmsg.push(res);
    this.scrollToBottom();
    console.log(this.Allmsg);
   
  })


}

getUniqueId(parts){
  const stringArr = [];
  for(let i = 0; i< parts; i++){
    // tslint:disable-next-line:no-bitwise
    const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    stringArr.push(S4);
  }
  return stringArr.join('-');
}
  
sendMsg(){
  let msg = this.msgInput.value.inputMsg;
  if(msg != ''){
    let t = {
      msg :msg,
      'type':'user'
  }
 
  this.Allmsg.push(t);
  this.scrollToBottom();
 
  this.chat.getIntent(msg,this.session).subscribe(res=>{
    console.log(res);
    this.Mainmsg.push(res);
    res['type'] = 'bot'
    this.Allmsg.push(res);
    this.scrollToBottom();
    console.log(this.Allmsg);
    this.msgInput.reset();
  })
  }
 
}
  
scrollToBottom = () => {
  try
  {
    
    // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    // console.log( this.myScrollContainer.nativeElement.scrollTop)
    // console.log( this.myScrollContainer.nativeElement.scrollHeight)
    var container = document.getElementById("msgContainer");    
    container.scrollTop = container.scrollHeight; 
  } catch (err) {}
}

  
}

