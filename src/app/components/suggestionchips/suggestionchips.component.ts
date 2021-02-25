import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-suggestionchips',
  templateUrl: './suggestionchips.component.html',
  styleUrls: ['./suggestionchips.component.css']
})
export class SuggestionchipsComponent implements OnInit {
  @Input() list: any; 
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  sendMsg(val){
      console.log(val)
      this.sendData.emit(val);
  }
}
