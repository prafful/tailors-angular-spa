import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  constructor(private http:HttpClient) { }

  addUser(fv){
    return this.http.post("https://dressmakers-api.cfapps.io/user/add",fv)
  }

}
