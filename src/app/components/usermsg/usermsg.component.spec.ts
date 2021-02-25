import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermsgComponent } from './usermsg.component';

describe('UsermsgComponent', () => {
  let component: UsermsgComponent;
  let fixture: ComponentFixture<UsermsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
