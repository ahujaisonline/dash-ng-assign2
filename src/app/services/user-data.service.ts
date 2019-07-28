import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  APIUrl = 'https://randomuser.me/api/'
  
  constructor(
    private http: HttpClient
  ) { }


  getData(count){
    return this.http.get(`${this.APIUrl}?results=${count}`)
  }



}
