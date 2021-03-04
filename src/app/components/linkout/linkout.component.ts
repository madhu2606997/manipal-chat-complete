import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-linkout',
  templateUrl: './linkout.component.html',
  styleUrls: ['./linkout.component.css']
})
export class LinkoutComponent implements OnInit {
  @Input() list: any; 
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log(this.list);
  }
  sendMsg(val){
    console.log(val)
    this.sendData.emit(val);
}


}
