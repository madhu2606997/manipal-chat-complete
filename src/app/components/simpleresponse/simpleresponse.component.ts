import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleresponse',
  templateUrl: './simpleresponse.component.html',
  styleUrls: ['./simpleresponse.component.css']
})
export class SimpleresponseComponent implements OnInit {
  @Input() list: any; 
  constructor() { }

  ngOnInit(): void {
  }

}
