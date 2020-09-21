import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { userAdd } from '../models/userAdd';
import { Key } from 'protractor';
import { type } from 'os';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  public token;

  showUsers: userAdd;

  userAdd: userAdd[];

  constructor(private httpClient: HttpClient) { }

  emp: any;

  getUsers() {

    var header = new HttpHeaders().set('Content-Type', 'application/json');

    return this.httpClient.get(environment.apiBaseUrl + '/getUsers', {headers: header})

  }

  getToken() {

    var tokenAlt = localStorage.getItem('token');

    if(tokenAlt != "undefined") {
      this.token = tokenAlt
    }else{
      this.token = null;
    }
    return this.token
  }


}
