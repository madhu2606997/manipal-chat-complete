import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: any; 
  @Output() sendData: EventEmitter<any> = new EventEmitter();
  search = new FormControl('');
  mainList = []
  subList = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.list)
    let temp = this.list.queryResult.fulfillmentMessages[1].listSelect.items
    temp.forEach(el => {
      this.mainList.push(el)
      this.subList.push(el)
    });
    console.log(this.mainList)
      this.search.valueChanges.subscribe(val=>{
        console.log(val)
       this.subList =  this.mainList.filter(function(item){
         console.log(item.title)
          return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;

      })
      })
  }
  sendMsg(val){
    console.log(val)
    this.sendData.emit(val);
}
}
