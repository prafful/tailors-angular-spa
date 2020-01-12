import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtailorComponent } from './addtailor.component';
import { AlltailorService } from '../services/alltailor.service';
import { HttpClientModule } from '@angular/common/http';

describe('AddtailorComponent', () => {
  let component: AddtailorComponent;
  let fixture: ComponentFixture<AddtailorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtailorComponent ],
      providers:[AlltailorService],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
