import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailordetailComponent } from './tailordetail.component';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('TailordetailComponent', () => {
  let component: TailordetailComponent;
  let fixture: ComponentFixture<TailordetailComponent>;
  let mockActivatedRoute ={
                            snapshot:{
                                      url: [{ path: 1 }, { path: 2 }]
                                    }
                          }

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailordetailComponent ],
      imports:[ HttpClientModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers:[
        {
          provide: ActivatedRouteSnapshot,
          useValue:1
        },
        
        {
          provide: ActivatedRoute,
          useValue:mockActivatedRoute
        }
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
