import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botmsg',
  templateUrl: './botmsg.component.html',
  styleUrls: ['./botmsg.component.css']
})
export class BotmsgComponent implements OnInit {
  @Input() list: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
