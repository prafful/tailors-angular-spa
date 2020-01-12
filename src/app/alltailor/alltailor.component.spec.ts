import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltailorComponent } from './alltailor.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../my-pipes/search-filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AlltailorComponent', () => {
  let component: AlltailorComponent;
  let fixture: ComponentFixture<AlltailorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltailorComponent, SearchFilterPipe ],
      imports:[FormsModule, HttpClientModule, RouterModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltailorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
