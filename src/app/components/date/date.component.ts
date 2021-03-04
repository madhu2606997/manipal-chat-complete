import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  model: NgbDateStruct;
  minDate
  maxDate
  current = new Date();
  @Output() sendTime: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.minDate = {
      year: this.current.getFullYear(),
      month: this.current.getMonth() + 1,
      day: this.current.getDate()
    };
    this.maxDate = {
      year: this.current.getFullYear(),
      month: this.current.getMonth() + 4,
      day: this.current.getDate()
    };
  }

  select(model){  
    this.sendTime.emit(model);
  }

}
