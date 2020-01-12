import { Component, OnInit } from '@angular/core';
import { AddUserService } from '../services/add-user.service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  exportAs: 'addUserForm'
})
export class HomeComponent implements OnInit {

  addUserForm:any

  constructor(private addUserService:AddUserService) { }

  ngOnInit() {
  }

  addUserFromHomePage(fv){

    if(fv!=null){
      
    console.log("Form Value: ");
    console.log(fv.email)
    this.addUserService.addUser(fv).subscribe(response => {
      console.log(response);
    })
    alert("Registered Successfully");
    window.location.reload();
  }
  else
  alert("Enter the details");
  }

}
