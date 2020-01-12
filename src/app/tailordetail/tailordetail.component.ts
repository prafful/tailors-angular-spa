import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlltailorService } from '../services/alltailor.service';

@Component({
  selector: 'app-tailordetail',
  templateUrl: './tailordetail.component.html',
  styleUrls: ['./tailordetail.component.scss']
})
export class TailordetailComponent implements OnInit {

  public clickedTailorid 

  oneTailor:any
  tags:any
  pics:any

  constructor(private route:ActivatedRoute, private tailorService:AlltailorService) { }

  ngOnInit() {
    let tailorId = parseInt(this.route.snapshot.paramMap.get("id"))
    this.clickedTailorid = tailorId
    this.getOneTailor(this.clickedTailorid)
  }

  getOneTailor(id){
    this.tailorService.getOneTailor(id).subscribe(response => {
      console.log(response)
      this.oneTailor = response
      this.tags = this.oneTailor.tags
      this.pics = this.oneTailor.tailorPics[0]
    })
  }




}
