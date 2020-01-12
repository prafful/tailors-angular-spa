import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlltailorService {

  constructor(private http:HttpClient) { }

  URL_ADD = "http://localhost:8080/tailor/"

  getAllTailors(){
    //return this.http.get("https://dressmakers-api.cfapps.io/tailor/all")
    return this.http.get(this.URL_ADD + "all")
  }

  getOneTailor(id){
    //return this.http.get("https://dressmakers-api.cfapps.io/tailor/get/" + id)
    return this.http.get(this.URL_ADD + "get/" + id)
  }

  addTailor(fv){
    //return this.http.post("https://dressmakers-api.cfapps.io/tailor/add",fv)
    return this.http.post(this.URL_ADD + "add", fv)
  }

}
