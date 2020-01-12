import { Component, OnInit } from '@angular/core';
import { AlltailorService } from '../services/alltailor.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-addtailor',
  templateUrl: './addtailor.component.html',
  styleUrls: ['./addtailor.component.scss'],
  exportAs:'addTailorForm'
})
export class AddtailorComponent implements OnInit {

  addTailorForm:any ={}


  constructor(private allTailorService:AlltailorService) { }

  ngOnInit() {
  }

  addTailor(at){

    at.tags = at.tags.split(',');
    at.maleDress = at.maleDress.split(',')
    at.femaleDress = at.femaleDress.split(',')
    at.tailorPics=at.tailorPics.substring(12).split(',')
    /* tailorPicsTemp.forEach(element => {
      at.tailorPics = element.substring(12)
    }); */
    
    at.dateOfRegistration = new Date()
    console.log(at)

    this.allTailorService.addTailor(at).subscribe(response => {
      console.log(response);
    })

  }

  resetAddForm(){

    //this.addTailorForm= {}

    this.addTailorForm.area = ""
    this.addTailorForm.city = ""
    this.addTailorForm.country= ""
    
    this.addTailorForm.description= ""
    this.addTailorForm.email= ""
    this.addTailorForm.femaleDress= ""
    this.addTailorForm.maleDress= ""
    this.addTailorForm.mobile= ""

    this.addTailorForm.shopName= ""
    this.addTailorForm.shopNumber= ""
    this.addTailorForm.street= ""
    this.addTailorForm.tags= ""
    this.addTailorForm.tailorName= ""
    this.addTailorForm.tailorPics= ""
 
  }

}