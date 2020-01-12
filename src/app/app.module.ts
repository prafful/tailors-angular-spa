import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from "ngx-bootstrap/carousel";

import { AlltailorComponent } from './alltailor/alltailor.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddtailorComponent } from './addtailor/addtailor.component';
import { TailordetailComponent } from './tailordetail/tailordetail.component';

import {SearchFilterPipe} from './my-pipes/search-filter.pipe';

import { AlltailorService } from './services/alltailor.service';
import { TestPipePipe } from './my-pipes/test-pipe.pipe';
import { NotFoundComponent } from './pageNotFound/not-found/not-found.component';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AlltailorComponent,
    HomeComponent,
    AboutusComponent,
    AddtailorComponent,
    TailordetailComponent,
    SearchFilterPipe,
    TestPipePipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot()
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [AlltailorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
