import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-suggestionchips',
  templateUrl: './suggestionchips.component.html',
  styleUrls: ['./suggestionchips.component.css']
})
export class SuggestionchipsComponent implements OnInit {
  @Input() list: any; 
  showD = false
  @Output() sendData: EventEmitter<any> = new EventEmitter();
 
  timeSlots = ["Slot-doctors","slot-doctor-ol","H-Slots","Hin-Slots-ol","Tel-Slots","Tel-Slots-ol","Ban-Slots","Ban-Slots-ol","Mal-Slots","Mal-Slots-ol","Tam-Slots","Tam-Slots-ol","Kan-Slots","Kan-Slots-ol"];
  constructor() { }

  ngOnInit(): void {

  }
  sendMsg(val){
      console.log(val)
      this.sendData.emit(val);
  }

  getMsg(val){
    console.log(val);
    this.sendData.emit(val.year +'-'+ ( '0' + val.month).substr( -2 )+'-'+( '0' + val.day).substr( -2 ));
  }
}
